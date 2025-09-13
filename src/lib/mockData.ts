export const categories = [
  { id: 'gaming', name: 'Gaming', icon: '🎮' },
  { id: 'anime', name: 'Anime & Manga', icon: '🎌' },
  { id: 'tech', name: 'Technology', icon: '💻' },
  { id: 'education', name: 'Education', icon: '📚' },
  { id: 'community', name: 'Community', icon: '👥' },
  { id: 'music', name: 'Music', icon: '🎵' },
  { id: 'art', name: 'Art & Design', icon: '🎨' },
  { id: 'news', name: 'News & Media', icon: '📰' },
  { id: 'business', name: 'Business', icon: '💼' },
  { id: 'crypto', name: 'Crypto', icon: '🪙' },
  { id: 'sports', name: 'Sports', icon: '⚽' },
  { id: 'memes', name: 'Memes & Fun', icon: '😂' },
]

export const languages = [
  { id: 'en', name: 'English', icon: '🇬🇧' },
  { id: 'es', name: 'Spanish', icon: '🇪🇸' },
  { id: 'fr', name: 'French', icon: '🇫🇷' },
  { id: 'de', name: 'German', icon: '🇩🇪' },
  { id: 'ru', name: 'Russian', icon: '🇷🇺' },
  { id: 'ar', name: 'Arabic', icon: '🇸🇦' },
]

export const mockGroups = [
  {
    id: '1',
    title: 'Crypto Traders Hub',
    description: 'Join the largest crypto trading community. Daily signals, market analysis, and educational content for both beginners and pros.',
    tags: ['crypto', 'trading', 'bitcoin', 'ethereum'],
    category: 'crypto',
    language: 'en',
    membersCount: 25430,
    bumpedAt: new Date(Date.now() - 1000 * 60 * 30), // 30 mins ago
    avatarUrl: 'https://picsum.photos/seed/crypto1/200',
    nsfw: false,
  },
  {
    id: '2',
    title: 'Anime Society',
    description: 'Discuss latest anime releases, manga chapters, and join watch parties with fellow otakus!',
    tags: ['anime', 'manga', 'japan', 'discussion'],
    category: 'anime',
    language: 'en',
    membersCount: 15750,
    bumpedAt: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
    avatarUrl: 'https://picsum.photos/seed/anime2/200',
    nsfw: false,
  },
  {
    id: '3',
    title: 'Tech Innovators',
    description: 'A community of developers, designers, and tech enthusiasts sharing knowledge and discussing the latest in technology.',
    tags: ['programming', 'technology', 'development', 'coding'],
    category: 'tech',
    language: 'en',
    membersCount: 8920,
    bumpedAt: new Date(Date.now() - 1000 * 60 * 90), // 1.5 hours ago
    avatarUrl: 'https://picsum.photos/seed/tech3/200',
    nsfw: false,
  },
  {
    id: '4',
    title: 'Gaming Lounge',
    description: 'Find gaming partners, discuss latest releases, and share your gaming moments. All platforms welcome!',
    tags: ['gaming', 'esports', 'playstation', 'xbox', 'pc'],
    category: 'gaming',
    language: 'en',
    membersCount: 32100,
    bumpedAt: new Date(Date.now() - 1000 * 60 * 120), // 2 hours ago
    avatarUrl: 'https://picsum.photos/seed/gaming4/200',
    nsfw: false,
  },
  {
    id: '5',
    title: 'Digital Artists United',
    description: 'Share your artwork, get feedback, and connect with fellow digital artists. Daily challenges and learning resources.',
    tags: ['art', 'digital-art', 'drawing', 'design'],
    category: 'art',
    language: 'en',
    membersCount: 5600,
    bumpedAt: new Date(Date.now() - 1000 * 60 * 150), // 2.5 hours ago
    avatarUrl: 'https://picsum.photos/seed/art5/200',
    nsfw: false,
  },
  {
    id: '6',
    title: 'Spanish Learning Community',
    description: '¡Aprende español con nosotros! Practice Spanish with native speakers and fellow learners.',
    tags: ['education', 'spanish', 'language-learning'],
    category: 'education',
    language: 'es',
    membersCount: 12300,
    bumpedAt: new Date(Date.now() - 1000 * 60 * 180), // 3 hours ago
    avatarUrl: 'https://picsum.photos/seed/edu6/200',
    nsfw: false,
  },
]
