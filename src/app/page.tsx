import Header from '@/components/Header'
import GroupCard from '@/components/GroupCard'
import Image from "next/image";

// Temporary mock data until we integrate with the database
const mockGroups = [
  {
    id: '1',
    title: 'Tech Enthusiasts',
    description: 'A community for discussing the latest in technology, programming, and digital innovation.',
    tags: ['tech', 'programming', 'innovation'],
    membersCount: 1500,
    bumpedAt: new Date(),
    language: 'English',
    nsfw: false,
  },
  {
    id: '2',
    title: 'Digital Artists',
    description: 'Share your artwork, get feedback, and connect with other digital artists.',
    tags: ['art', 'digital', 'creative'],
    membersCount: 2300,
    bumpedAt: new Date(Date.now() - 3600000), // 1 hour ago
    language: 'English',
    nsfw: false,
  },
]

export default function Home() {
  return (
    <main>
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <section>
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Popular Categories</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {['Technology', 'Art', 'Gaming', 'Education', 'Business', 'Entertainment'].map((category) => (
                <a
                  key={category}
                  href={`/category/${category.toLowerCase()}`}
                  className="flex aspect-square items-center justify-center rounded-lg bg-gray-100 p-4 text-center font-medium text-gray-900 hover:bg-gray-200"
                >
                  {category}
                </a>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Recently Bumped</h2>
              <a
                href="/groups"
                className="text-sm font-medium text-primary-600 hover:text-primary-500"
              >
                View all
              </a>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mockGroups.map((group) => (
                <GroupCard key={group.id} {...group} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
