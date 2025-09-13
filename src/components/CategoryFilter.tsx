import { FC } from 'react'
import { categories } from '@/lib/mockData'
import { useSearchStore } from '@/lib/store'

const CategoryFilter: FC = () => {
  const { filters, setCategory } = useSearchStore()

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setCategory(filters.category === category.id ? null : category.id)}
            className={`flex items-center space-x-2 rounded-lg border p-3 text-left transition-colors ${
              filters.category === category.id
                ? 'border-primary-500 bg-primary-50 text-primary-700'
                : 'border-gray-200 hover:border-primary-200 hover:bg-primary-50'
            }`}
          >
            <span className="text-2xl">{category.icon}</span>
            <span className="text-sm font-medium">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryFilter
