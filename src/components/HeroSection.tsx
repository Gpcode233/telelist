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
        className="object-cover brightness-75"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/95 via-primary-500/90 to-secondary-500/90" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <div className="mb-4 flex items-baseline justify-center space-x-2">
          <h1 className="text-6xl font-bold text-white drop-shadow-lg sm:text-7xl md:text-8xl">
            Bluppy
          </h1>
          <span className="text-lg font-medium text-accent-200 drop-shadow sm:text-xl">
            for Telegram
          </span>
        </div>
        <p className="max-w-2xl text-xl text-white/95 drop-shadow-md sm:text-2xl">
          Join millions of users in the most engaging Telegram groups and channels.
          Find your community or list your own in minutes.
        </p>

        {/* Search Bar */}
        <div className="mt-8 w-full max-w-2xl">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <MagnifyingGlassIcon
                className="h-6 w-6 text-secondary-400"
                aria-hidden="true"
              />
            </div>
            <input
              type="search"
              placeholder="Search for groups..."
              onChange={(e) => setQuery(e.target.value)}
              className="block w-full rounded-xl border-2 border-white/20 bg-white/90 py-4 pl-12 pr-4 text-lg leading-6 text-primary-900 placeholder-secondary-400 shadow-xl backdrop-blur-sm transition-all focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm text-white/90">
            <span>Popular:</span>
            {['gaming', 'crypto', 'anime', 'tech', 'education'].map((tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="rounded-full bg-white/20 px-3 py-1 font-medium shadow-sm backdrop-blur-sm transition-all hover:bg-white/30 hover:shadow-md"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection