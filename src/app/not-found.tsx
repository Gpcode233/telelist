'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="mx-auto max-w-max">
        <main className="sm:flex">
          <div className="relative h-64 w-full sm:h-72 md:h-96">
            <Image
              src="/404.jpg"
              alt="404 Error Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Page not found
              </h1>
              <p className="mt-3 text-base text-gray-500">
                Sorry, we couldn't find the page you're looking for.
              </p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <Link
                href="/"
                className="inline-flex items-center rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Go back home
              </Link>
              <Link
                href="/groups"
                className="inline-flex items-center rounded-md border border-transparent bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Browse groups
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}