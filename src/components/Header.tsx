import { type FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { 
  MagnifyingGlassIcon, 
  AdjustmentsHorizontalIcon 
} from '@heroicons/react/24/outline'
import { useSearchStore } from '@/lib/store'

const Header: FC = () => {
  const { filters, setQuery } = useSearchStore()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        isScrolled 
          ? 'border-b bg-white' 
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className={`text-xl font-bold ${
                isScrolled ? 'text-primary-600' : 'text-white'
              }`}>
                TeleList
              </span>
            </Link>
          </div>

          {isScrolled && (
            <div className="flex flex-1 items-center justify-center">
              <div className="w-full max-w-2xl">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="search"
                    placeholder="Search groups..."
                    value={filters.query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="block w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <AdjustmentsHorizontalIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center space-x-4">
            <Link
              href="/groups/new"
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                isScrolled
                  ? 'bg-primary-500 text-white hover:bg-primary-600'
                  : 'bg-white/20 text-white backdrop-blur-sm hover:bg-white/30'
              } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`}
            >
              Add Group
            </Link>
            <Link
              href="/dashboard"
              className={`hidden rounded-lg px-4 py-2 text-sm font-medium transition-colors sm:block ${
                isScrolled
                  ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  : 'bg-white/10 text-white backdrop-blur-sm hover:bg-white/20'
              } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`}
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
