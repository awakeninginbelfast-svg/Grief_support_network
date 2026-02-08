import Link from 'next/link'
import styles from '../page.module.css'

export default function CopingStrategies() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Coping Strategies</h1>
        <p>Practical techniques for navigating grief</p>
      </div>

      <div className={styles.center}>
        <div className={styles.hero}>
          <h2>Tools for Your Journey</h2>
          <p>
            Everyone grieves differently, and what works for one person may 
            not work for another. These strategies can help you find healthy 
            ways to process your emotions and move forward at your own pace.
          </p>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Journaling</h2>
          <p>
            Writing about your feelings can help you process emotions and 
            track your healing journey. Try writing letters to your loved 
            one or simply documenting your daily experiences.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Mindfulness & Meditation</h2>
          <p>
            Practice being present with your emotions without judgment. 
            Meditation can help reduce anxiety and provide moments of peace 
            during difficult times.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Physical Activity</h2>
          <p>
            Gentle exercise like walking, yoga, or swimming can help reduce 
            stress and improve mood. Physical activity releases endorphins 
            that can ease emotional pain.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Creative Expression</h2>
          <p>
            Art, music, poetry, or other creative outlets can help you 
            express feelings that are hard to put into words. Create a 
            memory box or scrapbook to honor your loved one.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Maintaining Routines</h2>
          <p>
            Keep up with daily routines like eating regular meals, getting 
            enough sleep, and maintaining hygiene. Structure can provide 
            stability during chaos.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Connecting with Others</h2>
          <p>
            Don&apos;t isolate yourself. Reach out to friends, family, or 
            support groups. Social connection is crucial for healing and 
            can remind you that you&apos;re not alone.
          </p>
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
