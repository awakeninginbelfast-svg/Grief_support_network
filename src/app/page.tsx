import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          You Are Not Alone
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Grief can feel isolating, but support is closer than you think. The
          Grief Support Network connects you with compassionate resources,
          community support groups, and guidance to help you navigate loss at
          your own pace.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/support-groups"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            Find a Support Group
          </Link>
          <Link
            href="/resources"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800"
          >
            Browse Resources
          </Link>
        </div>
      </section>

      {/* Feature cards */}
      <section className="mt-24 grid gap-8 sm:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Support Groups
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Join a safe, moderated group where you can share your experience and
            hear from others who understand what you&apos;re going through.
          </p>
          <Link
            href="/support-groups"
            className="mt-4 inline-block text-sm font-medium text-zinc-900 underline underline-offset-4 dark:text-zinc-50"
          >
            Learn more &rarr;
          </Link>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Curated Resources
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Access articles, hotlines, book recommendations, and professional
            directories to support your healing journey.
          </p>
          <Link
            href="/resources"
            className="mt-4 inline-block text-sm font-medium text-zinc-900 underline underline-offset-4 dark:text-zinc-50"
          >
            Learn more &rarr;
          </Link>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            About Us
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Learn about our mission to create a compassionate, inclusive space
            for anyone dealing with grief and loss.
          </p>
          <Link
            href="/about"
            className="mt-4 inline-block text-sm font-medium text-zinc-900 underline underline-offset-4 dark:text-zinc-50"
          >
            Learn more &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
