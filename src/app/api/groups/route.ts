import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()

// Input validation schema
const groupSchema = z.object({
  telegramGroupId: z.string(),
  title: z.string().min(3).max(100),
  description: z.string().min(10).max(500),
  tags: z.array(z.string()).min(1).max(5),
  category: z.string(),
  language: z.string(),
  nsfw: z.boolean().default(false),
  avatarUrl: z.string().url().optional(),
})

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const validatedData = groupSchema.parse(json)

    // Generate a verification token
    const token = Math.random().toString(36).substring(2, 15)

    // Create the group and verification records in a transaction
    const result = await prisma.$transaction(async (tx) => {
      const group = await tx.group.create({
        data: {
          ...validatedData,
          status: 'pending',
          owner: {
            // For now, create a temporary user. This should be replaced with proper user auth
            create: {
              telegramId: 'temp',
              displayName: 'Temporary User',
            },
          },
        },
      })

      const verification = await tx.verification.create({
        data: {
          groupId: group.id,
          token,
          method: 'bot',
          telegramUserId: 'pending',
        },
      })

      return { group, verification }
    })

    return NextResponse.json({
      success: true,
      data: {
        group: result.group,
        verificationToken: result.verification.token,
      },
    })
  } catch (error) {
    console.error('Error creating group:', error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof z.ZodError ? error.errors : 'Internal server error',
      },
      { status: error instanceof z.ZodError ? 400 : 500 }
    )
  }
}
