import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Grief Support Network',
  description: 'A supportive community for those navigating grief and loss',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
