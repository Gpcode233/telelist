export function formatTimeAgo(date: Date): string {
  // Floor to the nearest minute to ensure consistent server/client rendering
  const now = new Date()
  now.setSeconds(0, 0)
  const target = new Date(date)
  target.setSeconds(0, 0)
  
  const seconds = Math.floor((now.getTime() - target.getTime()) / 1000)
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  }

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / secondsInUnit)
    if (interval >= 1) {
      return `${interval} ${unit}${interval === 1 ? '' : 's'} ago`
    }
  }
  return 'just now'
}