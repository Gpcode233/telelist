import { type FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { categories } from '@/lib/mockData'
import { formatTimeAgo } from '@/lib/utils/date'

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


  const categoryInfo = categories.find((c) => c.id === category)

  return (
    <div className="group relative overflow-hidden rounded-xl border-2 border-primary-100/50 bg-white shadow-sm transition-all hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5">
      {nsfw && (
        <div className="absolute right-0 top-0 z-10 rounded-bl-xl bg-secondary-500 px-3 py-1 text-xs font-medium text-white shadow-lg shadow-secondary-500/20">
          NSFW
        </div>
      )}
      <Link href={`/group/${id}`}>
        <div className="flex flex-col">
          {/* Header with avatar and category */}
          <div className="flex items-center space-x-3 border-b border-primary-100/50 p-4">
            <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl shadow-sm transition-shadow group-hover:shadow-md">
              {avatarUrl ? (
                <Image
                  src={avatarUrl}
                  alt={title}
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-primary-500 text-xl font-bold text-white">
                  {title.charAt(0)}
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="truncate text-base font-medium text-gray-900 group-hover:text-primary-500">
                {title}
              </h3>
              <div className="flex items-center space-x-2 text-xs">
                <span className="flex items-center space-x-1 text-accent-600">
                  <span>{categoryInfo?.icon}</span>
                  <span>{categoryInfo?.name}</span>
                </span>
                <span className="text-gray-300">•</span>
                <span className="text-primary-500">{language}</span>
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
                  className="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-600 ring-1 ring-primary-100 transition-colors hover:bg-primary-100"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 4 && (
                <span className="rounded-full bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-500 ring-1 ring-gray-200">
                  +{tags.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Footer with stats */}
          <div className="flex items-center justify-between border-t border-primary-100/50 bg-primary-50/50 px-4 py-3 text-xs">
            <div className="flex items-center space-x-3 text-gray-500">
              <span>{membersCount.toLocaleString()} members</span>
              <span className="text-gray-300">•</span>
              <span>Bumped {formatTimeAgo(bumpedAt)}</span>
            </div>
            <button className="rounded-lg bg-primary-500 px-3 py-1.5 text-xs font-medium text-white shadow-sm transition-all hover:bg-primary-600 hover:shadow-md hover:shadow-primary-500/20">
              Join
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default GroupCard
