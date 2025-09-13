import { type FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface GroupCardProps {
  id: string
  title: string
  description: string
  tags: string[]
  membersCount: number
  bumpedAt: Date
  avatarUrl?: string | null
  language: string
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

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-white p-6 transition-all hover:shadow-lg">
      {nsfw && (
        <span className="absolute right-0 top-0 rounded-bl-lg bg-red-500 px-2 py-1 text-xs font-semibold text-white">
          NSFW
        </span>
      )}
      <Link href={`/group/${id}`} className="block">
        <div className="flex items-start space-x-4">
          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
            {avatarUrl ? (
              <Image
                src={avatarUrl}
                alt={title}
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gray-100 text-xl font-bold text-gray-400">
                {title.charAt(0)}
              </div>
            )}
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="line-clamp-2 text-sm text-gray-600">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <span>{membersCount.toLocaleString()} members</span>
                <span className="inline-flex items-center space-x-1">
                  <Image
                    src={`/globe.svg`}
                    alt={language}
                    width={16}
                    height={16}
                    className="opacity-75"
                  />
                  <span>{language}</span>
                </span>
              </div>
              <span>{timeAgo(bumpedAt)}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default GroupCard
