import { FC } from 'react'
import { languages } from '@/lib/mockData'
import { useSearchStore } from '@/lib/store'

const LanguageFilter: FC = () => {
  const { filters, setLanguage } = useSearchStore()

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Languages</h3>
      <div className="flex flex-wrap gap-2">
        {languages.map((lang) => (
          <button
            key={lang.id}
            onClick={() => setLanguage(filters.language === lang.id ? null : lang.id)}
            className={`flex items-center space-x-2 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${
              filters.language === lang.id
                ? 'border-primary-500 bg-primary-50 text-primary-700'
                : 'border-gray-200 hover:border-primary-200 hover:bg-primary-50'
            }`}
          >
            <span>{lang.icon}</span>
            <span>{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default LanguageFilter
