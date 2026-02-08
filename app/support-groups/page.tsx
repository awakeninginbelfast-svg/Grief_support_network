import Link from 'next/link'
import styles from '../page.module.css'

export default function SupportGroups() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Support Groups</h1>
        <p>Connect with others who understand your journey</p>
      </div>

      <div className={styles.center}>
        <div className={styles.hero}>
          <h2>Finding Community</h2>
          <p>
            Support groups provide a safe space to share your experiences, 
            learn from others, and know that you&apos;re not alone. 
            Whether in-person or online, these groups can be an invaluable 
            part of your healing journey.
          </p>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Online Support Groups</h2>
          <p>
            Join virtual support groups that meet regularly via video chat. 
            These groups offer flexibility and the ability to connect with 
            people from around the world.
          </p>
        </div>

        <div className={styles.card}>
          <h2>In-Person Groups</h2>
          <p>
            Find local grief support groups in your community. Meeting 
            face-to-face can provide a deeper sense of connection and 
            support during difficult times.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Specialized Groups</h2>
          <p>
            Groups focused on specific types of loss, such as loss of a 
            spouse, child, parent, or friend. Some groups also focus on 
            specific causes like suicide or addiction.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Peer-to-Peer Support</h2>
          <p>
            Connect one-on-one with someone who has experienced a similar 
            loss. Peer support can provide understanding and validation 
            in a personal way.
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
