import { type FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { categories } from '@/lib/mockData'

interface GroupCardProps {
  id: string
  title: string
  description: string
  tags: string[]
  membersCount: number
  bumpedAt: Date
  avatarUrl?: string | null
  language: string
  category: string
  nsfw: boolean
}

const GroupCard: FC<GroupCardProps> = ({
  id,
  title,
  description,
  tags,
  membersCount,
  bumpedAt,
  avatarUrl,
  language,
  category,
  nsfw,
}) => {
  const timeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000)
    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
    }

    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
      const interval = Math.floor(seconds / secondsInUnit)
      if (interval >= 1) {
        return `${interval} ${unit}${interval === 1 ? '' : 's'} ago`
      }
    }
    return 'just now'
  }

  const categoryInfo = categories.find((c) => c.id === category)

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-lg">
      {nsfw && (
        <div className="absolute right-0 top-0 z-10 rounded-bl-lg bg-red-500 px-2 py-1 text-xs font-medium text-white">
          NSFW
        </div>
      )}
      <Link href={`/group/${id}`}>
        <div className="flex flex-col">
          {/* Header with avatar and category */}
          <div className="flex items-center space-x-3 border-b p-4">
            <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg">
              {avatarUrl ? (
                <Image
                  src={avatarUrl}
                  alt={title}
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-primary-100 text-xl font-bold text-primary-600">
                  {title.charAt(0)}
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="truncate text-base font-medium text-gray-900">
                {title}
              </h3>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <span className="flex items-center space-x-1">
                  <span>{categoryInfo?.icon}</span>
                  <span>{categoryInfo?.name}</span>
                </span>
                <span>•</span>
                <span>{language}</span>
              </div>
            </div>
          </div>

          {/* Description and tags */}
          <div className="flex-1 space-y-3 p-4">
            <p className="line-clamp-2 text-sm text-gray-600">{description}</p>
            <div className="flex flex-wrap gap-1.5">
              {tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 hover:bg-gray-200"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 4 && (
                <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-500">
                  +{tags.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Footer with stats */}
          <div className="flex items-center justify-between border-t px-4 py-3 text-xs text-gray-500">
            <div className="flex items-center space-x-3">
              <span>{membersCount.toLocaleString()} members</span>
              <span>•</span>
              <span>Bumped {timeAgo(bumpedAt)}</span>
            </div>
            <button className="rounded bg-primary-500 px-2 py-1 text-xs font-medium text-white hover:bg-primary-600">
              Join
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default GroupCard
