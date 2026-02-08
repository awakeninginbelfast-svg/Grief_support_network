import Link from 'next/link'
import styles from '../page.module.css'

export default function Resources() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Grief Support Resources</h1>
        <p>Helpful information and materials for your healing journey</p>
      </div>

      <div className={styles.center}>
        <div className={styles.hero}>
          <h2>Educational Resources</h2>
          <p>
            Understanding grief is an important step in the healing process. 
            These resources provide information about different types of grief, 
            stages of grief, and healthy coping mechanisms.
          </p>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Books</h2>
          <ul>
            <li>&quot;The Year of Magical Thinking&quot; by Joan Didion</li>
            <li>&quot;When Breath Becomes Air&quot; by Paul Kalanithi</li>
            <li>&quot;Option B&quot; by Sheryl Sandberg</li>
            <li>&quot;A Grief Observed&quot; by C.S. Lewis</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>Online Articles</h2>
          <ul>
            <li>Understanding the Stages of Grief</li>
            <li>Complicated Grief vs. Normal Grief</li>
            <li>Supporting Children Through Grief</li>
            <li>Anniversary Reactions and Triggers</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>Videos & Podcasts</h2>
          <ul>
            <li>TED Talks on Grief and Loss</li>
            <li>The Grief Out Loud Podcast</li>
            <li>Terrible, Thanks for Asking</li>
            <li>What&apos;s Your Grief Podcast</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>Helpful Organizations</h2>
          <ul>
            <li>The Dougy Center</li>
            <li>What&apos;s Your Grief</li>
            <li>GriefShare</li>
            <li>The Compassionate Friends</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Link href="/" style={{ color: '#0070f3', textDecoration: 'underline' }}>
          ← Back to Home
        </Link>
      </div>
    </main>
  )
}
