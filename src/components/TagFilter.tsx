import { FC } from 'react'
import { useSearchStore } from '@/lib/store'
import { mockGroups } from '@/lib/mockData'

const TagFilter: FC = () => {
  const { filters, addTag, removeTag } = useSearchStore()

  // Get unique tags from all groups
  const allTags = Array.from(
    new Set(mockGroups.flatMap((group) => group.tags))
  ).sort()

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-primary-900">Popular Tags</h3>
      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() =>
              filters.tags.includes(tag) ? removeTag(tag) : addTag(tag)
            }
            className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
              filters.tags.includes(tag)
                ? 'bg-primary-500 text-white shadow-sm shadow-primary-500/20 hover:bg-primary-600'
                : 'bg-primary-50 text-primary-700 ring-1 ring-primary-200 hover:bg-primary-100'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TagFilter
