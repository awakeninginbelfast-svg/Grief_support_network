import Link from 'next/link'
import styles from '../page.module.css'

export default function ProfessionalHelp() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Professional Help</h1>
        <p>Finding qualified grief counselors and therapists</p>
      </div>

      <div className={styles.center}>
        <div className={styles.hero}>
          <h2>When to Seek Professional Support</h2>
          <p>
            While grief is a natural process, sometimes professional help 
            can make a significant difference. If you&apos;re experiencing 
            prolonged or complicated grief, a trained therapist can provide 
            specialized support and guidance.
          </p>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Grief Counselors</h2>
          <p>
            Grief counselors specialize in helping people navigate loss. 
            They provide a safe, non-judgmental space to process your 
            emotions and develop healthy coping strategies.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Licensed Therapists</h2>
          <p>
            Look for licensed therapists with experience in grief and 
            bereavement. They can help address complicated grief, 
            depression, anxiety, or trauma related to loss.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Psychiatrists</h2>
          <p>
            If you&apos;re experiencing severe depression, anxiety, or other 
            mental health challenges alongside grief, a psychiatrist can 
            provide medication management in addition to therapy.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Finding the Right Provider</h2>
          <p>
            Consider factors like specialization, approach, availability, 
            and whether you prefer in-person or teletherapy. Many 
            providers offer a free consultation call.
          </p>
        </div>
      </div>

      <div className={styles.center} style={{ marginTop: '3rem' }}>
        <div className={styles.hero}>
          <h3>Signs You May Benefit from Professional Help</h3>
          <ul style={{ textAlign: 'left', margin: '1rem auto', maxWidth: '600px' }}>
            <li>Intense grief that isn&apos;t improving over time</li>
            <li>Difficulty functioning in daily life</li>
            <li>Thoughts of self-harm or suicide</li>
            <li>Substance abuse to cope with pain</li>
            <li>Social isolation and withdrawal</li>
            <li>Inability to accept the loss</li>
            <li>Persistent feelings of hopelessness</li>
          </ul>
          <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>
            Remember: Seeking help is a sign of strength, not weakness.
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
