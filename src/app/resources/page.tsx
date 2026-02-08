import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Grief Support Network",
  description:
    "Helpful resources including hotlines, articles, books, and professional directories for grief support.",
};

const hotlines = [
  {
    name: "988 Suicide & Crisis Lifeline",
    contact: "Call or text 988",
    description:
      "Free, confidential support 24/7 for people in distress and those who care about them.",
  },
  {
    name: "Crisis Text Line",
    contact: "Text HELLO to 741741",
    description:
      "Free crisis counseling via text message, available 24/7.",
  },
  {
    name: "SAMHSA National Helpline",
    contact: "1-800-662-4357",
    description:
      "Free, confidential, 24/7 treatment referral and information service.",
  },
];

const articles = [
  {
    title: "Understanding the Stages of Grief",
    description:
      "An overview of common grief models and why everyone experiences grief differently.",
  },
  {
    title: "Coping with Loss During the Holidays",
    description:
      "Practical tips for navigating celebrations and family gatherings while grieving.",
  },
  {
    title: "Supporting a Grieving Friend or Family Member",
    description:
      "How to show up for someone in mourning without overstepping boundaries.",
  },
  {
    title: "Grief and Self-Care",
    description:
      "Why taking care of your physical and emotional health matters during loss.",
  },
];

const books = [
  {
    title: "It's OK That You're Not OK",
    author: "Megan Devine",
  },
  {
    title: "The Year of Magical Thinking",
    author: "Joan Didion",
  },
  {
    title: "Option B: Facing Adversity, Building Resilience, and Finding Joy",
    author: "Sheryl Sandberg & Adam Grant",
  },
  {
    title: "When Breath Becomes Air",
    author: "Paul Kalanithi",
  },
];

export default function ResourcesPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Resources
      </h1>
      <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
        Below you will find a curated collection of resources to support you or
        someone you care about through the grieving process.
      </p>

      {/* Hotlines */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Crisis Hotlines
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {hotlines.map((h) => (
            <div
              key={h.name}
              className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800"
            >
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                {h.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {h.contact}
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {h.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Articles &amp; Guides
        </h2>
        <ul className="mt-4 space-y-4">
          {articles.map((a) => (
            <li
              key={a.title}
              className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800"
            >
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                {a.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {a.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Recommended reading */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Recommended Reading
        </h2>
        <ul className="mt-4 space-y-3">
          {books.map((b) => (
            <li key={b.title} className="text-zinc-700 dark:text-zinc-300">
              <span className="font-medium text-zinc-900 dark:text-zinc-50">
                {b.title}
              </span>{" "}
              &mdash; {b.author}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
