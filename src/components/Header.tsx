import { type FC } from 'react'
import Link from 'next/link'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

interface HeaderProps {
  onSearch?: (query: string) => void
}

const Header: FC<HeaderProps> = ({ onSearch }) => {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">TeleList</span>
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-center px-6">
            <div className="w-full max-w-lg">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm"
                  placeholder="Search groups..."
                  type="search"
                  onChange={(e) => onSearch?.(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/groups/new"
              className="rounded-lg bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Add Group
            </Link>
            <Link
              href="/dashboard"
              className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
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
