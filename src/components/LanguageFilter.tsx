import { FC } from 'react'
import { languages } from '@/lib/mockData'
import { useSearchStore } from '@/lib/store'

const LanguageFilter: FC = () => {
  const { filters, setLanguage } = useSearchStore()

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-primary-900">Languages</h3>
      <div className="flex flex-wrap gap-2">
        {languages.map((lang) => (
          <button
            key={lang.id}
            onClick={() => setLanguage(filters.language === lang.id ? null : lang.id)}
            className={`flex items-center space-x-2 rounded-lg border-2 px-3 py-1.5 text-sm font-medium shadow-sm transition-all ${
              filters.language === lang.id
                ? 'border-primary-500 bg-primary-50 text-primary-700 shadow-primary-500/10'
                : 'border-primary-100 text-primary-800 hover:border-primary-200 hover:bg-primary-50/50 hover:shadow-md hover:shadow-primary-500/5'
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
