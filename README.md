# Telegram Directory — MVP

A clean, fast directory where Telegram group and channel owners can list, verify, and promote their communities. Users can discover groups via search, tags, categories and join via invite links; admins verify ownership through a Telegram bot.

## Stack
- Next.js + Tailwind CSS
- Node.js + Telegraf.js
- PostgreSQL (or Firebase/Firestore)

## Environment Variables
```env
TELEGRAM_BOT_TOKEN=xxxx
DATABASE_URL=postgres://...
NEXT_PUBLIC_BASE_URL=https://staging.example.com
```

## Development
```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Start the Telegram bot (once implemented)
node server/bot.js
```

## Features
- Bot verification ensures only admins can publish
- Group submission with title, description, category, tags
- Search and filter by tags, categories, language
- Admin dashboard for managing listings
- Bump functionality to promote listings
- Join via invite links
- Staging watermark (enabled when NODE_ENV !== 'production')

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
