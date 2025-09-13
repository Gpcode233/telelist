import { Telegraf } from 'telegraf'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN || '')

// Store temporary verification tokens
const pendingVerifications = new Map()

bot.command('start', (ctx) => {
  ctx.reply('Welcome to TeleList! Use /verify <token> to verify your group ownership.')
})

bot.command('verify', async (ctx) => {
  const token = ctx.message.text.split(' ')[1]
  if (!token) {
    return ctx.reply('Please provide a verification token: /verify <token>')
  }

  try {
    // Check if token exists in pending verifications
    const verification = await prisma.verification.findUnique({
      where: { token },
      include: { group: true },
    })

    if (!verification) {
      return ctx.reply('Invalid or expired verification token.')
    }

    if (verification.verifiedAt) {
      return ctx.reply('This token has already been used.')
    }

    // Get chat member info to verify admin status
    const chatMember = await ctx.telegram.getChatMember(
      verification.group.telegramGroupId,
      ctx.from.id.toString()
    )

    if (!['creator', 'administrator'].includes(chatMember.status)) {
      return ctx.reply('You must be an admin of the group to verify ownership.')
    }

    // Update verification and group status
    await prisma.$transaction([
      prisma.verification.update({
        where: { id: verification.id },
        data: {
          verifiedAt: new Date(),
          telegramUserId: ctx.from.id.toString(),
        },
      }),
      prisma.group.update({
        where: { id: verification.groupId },
        data: { status: 'approved' },
      }),
    ])

    ctx.reply('✅ Group verified successfully! You can now manage your listing on TeleList.')
  } catch (error) {
    console.error('Verification error:', error)
    ctx.reply('An error occurred during verification. Please try again later.')
  }
})

bot.catch((err) => {
  console.error('Bot error:', err)
})

export default bot

// Start the bot if this file is run directly
if (require.main === module) {
  bot.launch()
  console.log('Bot started!')

  // Enable graceful stop
  process.once('SIGINT', () => bot.stop('SIGINT'))
  process.once('SIGTERM', () => bot.stop('SIGTERM'))
}
