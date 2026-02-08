import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Grief Support Network",
  description:
    "Learn about the Grief Support Network's mission, values, and the team behind the community.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        About Us
      </h1>

      <section className="mt-8 max-w-3xl space-y-6 text-zinc-600 dark:text-zinc-400">
        <p>
          The Grief Support Network was created out of a simple belief:{" "}
          <strong className="text-zinc-900 dark:text-zinc-50">
            no one should have to grieve alone.
          </strong>{" "}
          Whether you&apos;ve lost a loved one recently or are still carrying
          grief from years ago, this community is here for you.
        </p>
        <p>
          We provide free, accessible support through peer-led groups, curated
          educational resources, and a safe online space where vulnerability is
          met with compassion rather than judgment.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Our Values
        </h2>
        <ul className="mt-4 space-y-4">
          {[
            {
              title: "Compassion",
              text: "We lead with empathy in every interaction, recognizing that grief is deeply personal.",
            },
            {
              title: "Inclusivity",
              text: "All forms of loss and all people are welcome here, regardless of background, identity, or belief.",
            },
            {
              title: "Safety",
              text: "We maintain confidential, moderated spaces so that everyone can share openly and feel secure.",
            },
            {
              title: "Accessibility",
              text: "All of our resources and groups are free to ensure that cost is never a barrier to healing.",
            },
          ].map((v) => (
            <li key={v.title}>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                {v.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {v.text}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Get Involved
        </h2>
        <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
          The Grief Support Network is a community-driven project. Whether you
          want to facilitate a group, contribute resources, or simply share your
          story, your voice matters. Reach out through our GitHub repository or
          join one of our support groups to get started.
        </p>
      </section>
    </main>
  );
}
