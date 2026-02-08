import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grief Support Network",
  description:
    "A compassionate community providing resources, support groups, and guidance for those navigating grief and loss.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="text-lg font-semibold text-zinc-900 dark:text-zinc-50"
            >
              Grief Support Network
            </Link>
            <ul className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/support-groups"
                  className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
                >
                  Support Groups
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
          <div className="mx-auto max-w-5xl px-6 py-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
            <p>
              If you are in crisis, please call or text{" "}
              <strong>988</strong> (Suicide &amp; Crisis Lifeline) or text{" "}
              <strong>HELLO</strong> to <strong>741741</strong> (Crisis Text
              Line).
            </p>
            <p className="mt-4">
              &copy; {new Date().getFullYear()} Grief Support Network. All
              rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
