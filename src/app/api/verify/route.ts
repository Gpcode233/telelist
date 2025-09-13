import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()

const verifySchema = z.object({
  token: z.string(),
  telegramUserId: z.string(),
})

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const { token, telegramUserId } = verifySchema.parse(json)

    const verification = await prisma.verification.findUnique({
      where: { token },
      include: { group: true },
    })

    if (!verification) {
      return NextResponse.json(
        { success: false, error: 'Invalid verification token' },
        { status: 400 }
      )
    }

    if (verification.verifiedAt) {
      return NextResponse.json(
        { success: false, error: 'Token already used' },
        { status: 400 }
      )
    }

    // Update verification and group status
    const result = await prisma.$transaction([
      prisma.verification.update({
        where: { id: verification.id },
        data: {
          verifiedAt: new Date(),
          telegramUserId,
        },
      }),
      prisma.group.update({
        where: { id: verification.groupId },
        data: { status: 'approved' },
      }),
    ])

    return NextResponse.json({
      success: true,
      data: { group: result[1] },
    })
  } catch (error) {
    console.error('Error verifying group:', error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof z.ZodError ? error.errors : 'Internal server error',
      },
      { status: error instanceof z.ZodError ? 400 : 500 }
    )
  }
}
