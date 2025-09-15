import { FC } from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useSearchStore } from '@/lib/store'

const HeroSection: FC = () => {
  const { setQuery } = useSearchStore()

  return (
    <div className="relative h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero.jpg"
        alt="Hero Background"
        fill
        className="object-cover brightness-[0.7]"
        priority
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Discover the Best Telegram Communities
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-gray-100">
          Join millions of users in the most engaging Telegram groups and channels.
          Find your community or list your own in minutes.
        </p>

        {/* Search Bar */}
        <div className="mt-8 w-full max-w-2xl">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              type="search"
              placeholder="Search for groups..."
              onChange={(e) => setQuery(e.target.value)}
              className="block w-full rounded-lg border border-transparent bg-white/90 py-3 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 backdrop-blur-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-lg"
            />
          </div>
          <p className="mt-3 text-sm text-gray-200">
            Popular: gaming, crypto, anime, tech, education
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection