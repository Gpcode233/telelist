'use client'

import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import GroupCard from '@/components/GroupCard'
import CategoryFilter from '@/components/CategoryFilter'
import TagFilter from '@/components/TagFilter'
import LanguageFilter from '@/components/LanguageFilter'
import { useSearchStore } from '@/lib/store'

export default function Home() {
  const { filteredGroups, filters, resetFilters } = useSearchStore()

  return (
    <div className="min-h-screen bg-background-light">
      <Header />
      <HeroSection />
      <main>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {/* Filters sidebar */}
            <div className="hidden w-64 flex-shrink-0 space-y-8 lg:block">
              <CategoryFilter />
              <LanguageFilter />
              <TagFilter />
              {(filters.category || filters.language || filters.tags.length > 0) && (
                <button
                  onClick={resetFilters}
                  className="w-full rounded-lg border-2 border-primary-100 bg-white px-4 py-2 text-sm font-medium text-primary-600 shadow-sm transition-all hover:border-primary-200 hover:bg-primary-50"
                >
                  Reset Filters
                </button>
              )}
            </div>

            {/* Main content */}
            <div className="flex-1 space-y-8">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-primary-900">
                  {filters.category || filters.language || filters.tags.length > 0
                    ? 'Search Results'
                    : 'Recently Bumped Groups'}
                </h1>
                <span className="text-sm text-secondary-600">
                  {filteredGroups.length} groups found
                </span>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                {filteredGroups.map((group) => (
                  <GroupCard key={group.id} {...group} />
                ))}
              </div>

              {filteredGroups.length === 0 && (
                <div className="rounded-xl border-2 border-dashed border-primary-100 bg-primary-50/50 p-12 text-center">
                  <h3 className="text-lg font-medium text-primary-900">No groups found</h3>
                  <p className="mt-2 text-sm text-primary-600">
                    Try adjusting your filters or search query
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
