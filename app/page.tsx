import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Grief Support Network</h1>
        <p>A supportive community for those navigating grief and loss</p>
      </div>

      <div className={styles.center}>
        <div className={styles.hero}>
          <h2>You Are Not Alone</h2>
          <p>
            Grief is a natural response to loss. Whether you&apos;re dealing with the death
            of a loved one, the end of a relationship, or any other significant loss,
            we&apos;re here to provide support and resources.
          </p>
        </div>
      </div>

      <div className={styles.grid}>
        <Link
          href="/resources"
          className={styles.card}
        >
          <h2>
            Resources <span>→</span>
          </h2>
          <p>Find helpful articles, books, and online resources about grief and healing.</p>
        </Link>

        <Link
          href="/support-groups"
          className={styles.card}
        >
          <h2>
            Support Groups <span>→</span>
          </h2>
          <p>Connect with others who understand what you&apos;re going through.</p>
        </Link>

        <Link
          href="/coping-strategies"
          className={styles.card}
        >
          <h2>
            Coping Strategies <span>→</span>
          </h2>
          <p>Learn practical techniques to help you navigate your grief journey.</p>
        </Link>

        <Link
          href="/professional-help"
          className={styles.card}
        >
          <h2>
            Professional Help <span>→</span>
          </h2>
          <p>Find qualified therapists and counselors who specialize in grief counseling.</p>
        </Link>
      </div>

      <div className={styles.footer}>
        <p>
          <strong>Crisis Support:</strong> If you&apos;re in crisis, please call the National
          Suicide Prevention Lifeline at 988 or text &quot;HELLO&quot; to 741741.
        </p>
      </div>
    </main>
  )
}
