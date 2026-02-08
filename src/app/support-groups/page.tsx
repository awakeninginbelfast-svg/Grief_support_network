import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Groups | Grief Support Network",
  description:
    "Find peer-led and professionally facilitated grief support groups that meet online and in person.",
};

const groups = [
  {
    name: "General Grief Support",
    schedule: "Every Tuesday, 7:00 PM – 8:30 PM",
    format: "Virtual (Zoom)",
    description:
      "An open group for anyone experiencing grief, regardless of the type of loss. A safe space to share, listen, and connect.",
  },
  {
    name: "Loss of a Spouse or Partner",
    schedule: "Every Thursday, 6:30 PM – 8:00 PM",
    format: "Virtual (Zoom)",
    description:
      "Dedicated to individuals coping with the death of a spouse or life partner. Facilitated by a licensed grief counselor.",
  },
  {
    name: "Loss of a Parent",
    schedule: "1st and 3rd Saturday, 10:00 AM – 11:30 AM",
    format: "Virtual (Zoom)",
    description:
      "A supportive space for adult children grieving the loss of a mother or father.",
  },
  {
    name: "Child and Infant Loss",
    schedule: "Every Wednesday, 7:00 PM – 8:30 PM",
    format: "Virtual (Zoom)",
    description:
      "For parents and families affected by the loss of a child, including miscarriage, stillbirth, and infant loss.",
  },
  {
    name: "Pet Loss Support",
    schedule: "2nd and 4th Monday, 6:00 PM – 7:00 PM",
    format: "Virtual (Zoom)",
    description:
      "A compassionate group for those mourning the loss of a beloved pet. All types of animal companions welcome.",
  },
  {
    name: "Young Adults Grief Circle (Ages 18-30)",
    schedule: "Every Friday, 5:00 PM – 6:30 PM",
    format: "Virtual (Zoom)",
    description:
      "Designed for young adults navigating grief during a pivotal time of life. Peer-facilitated.",
  },
];

export default function SupportGroupsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Support Groups
      </h1>
      <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
        Our support groups are free, confidential, and open to anyone. Whether
        you prefer to speak or simply listen, you are welcome here.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {groups.map((g) => (
          <div
            key={g.name}
            className="flex flex-col rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"
          >
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {g.name}
            </h2>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {g.schedule} &middot; {g.format}
            </p>
            <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {g.description}
            </p>
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-2xl border border-zinc-200 bg-zinc-50 p-8 text-center dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Want to Start or Lead a Group?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-zinc-600 dark:text-zinc-400">
          We&apos;re always looking for compassionate facilitators. If
          you&apos;re interested in volunteering or starting a new group, reach
          out to us and we&apos;ll help you get set up.
        </p>
      </section>
    </main>
  );
}
