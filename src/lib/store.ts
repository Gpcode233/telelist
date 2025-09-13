import { create } from 'zustand'
import { categories, languages, mockGroups } from './mockData'

interface SearchFilters {
  query: string
  category: string | null
  language: string | null
  tags: string[]
}

interface SearchStore {
  filters: SearchFilters
  setQuery: (query: string) => void
  setCategory: (category: string | null) => void
  setLanguage: (language: string | null) => void
  addTag: (tag: string) => void
  removeTag: (tag: string) => void
  resetFilters: () => void
  filteredGroups: typeof mockGroups
}

export const useSearchStore = create<SearchStore>((set, get) => ({
  filters: {
    query: '',
    category: null,
    language: null,
    tags: [],
  },
  setQuery: (query) =>
    set((state) => ({
      filters: { ...state.filters, query },
    })),
  setCategory: (category) =>
    set((state) => ({
      filters: { ...state.filters, category },
    })),
  setLanguage: (language) =>
    set((state) => ({
      filters: { ...state.filters, language },
    })),
  addTag: (tag) =>
    set((state) => ({
      filters: {
        ...state.filters,
        tags: state.filters.tags.includes(tag)
          ? state.filters.tags
          : [...state.filters.tags, tag],
      },
    })),
  removeTag: (tag) =>
    set((state) => ({
      filters: {
        ...state.filters,
        tags: state.filters.tags.filter((t) => t !== tag),
      },
    })),
  resetFilters: () =>
    set({
      filters: {
        query: '',
        category: null,
        language: null,
        tags: [],
      },
    }),
  get filteredGroups() {
    const { query, category, language, tags } = get().filters
    return mockGroups.filter((group) => {
      const matchesQuery =
        !query ||
        group.title.toLowerCase().includes(query.toLowerCase()) ||
        group.description.toLowerCase().includes(query.toLowerCase()) ||
        group.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))

      const matchesCategory = !category || group.category === category
      const matchesLanguage = !language || group.language === language
      const matchesTags =
        tags.length === 0 ||
        tags.every((tag) => group.tags.includes(tag))

      return matchesQuery && matchesCategory && matchesLanguage && matchesTags
    })
  },
}))
