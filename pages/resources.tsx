import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

export default function Resources() {
  return (
    <>
      <Head>
        <title>Resources - Grief Support Network</title>
        <meta name="description" content="Find grief support resources and helplines" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>Support Resources</h1>
        </header>

        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/resources" className={styles.navLink}>Resources</Link>
          <Link href="/stages" className={styles.navLink}>Stages of Grief</Link>
        </nav>

        <div className={styles.container}>
          <section className={styles.welcome}>
            <h2 id="crisis">🆘 Crisis Support</h2>
            <p>If you're in immediate crisis or having thoughts of self-harm:</p>
            <div className={styles.resourceBox}>
              <h3>National Suicide Prevention Lifeline</h3>
              <p><strong>Phone:</strong> 988 or 1-800-273-8255</p>
              <p><strong>Available:</strong> 24/7</p>
              <p>Free and confidential support for people in distress.</p>
            </div>
            <div className={styles.resourceBox}>
              <h3>Crisis Text Line</h3>
              <p><strong>Text:</strong> HOME to 741741</p>
              <p><strong>Available:</strong> 24/7</p>
              <p>Connect with a trained crisis counselor via text.</p>
            </div>
          </section>

          <section className={styles.welcome}>
            <h2>Grief Support Helplines</h2>
            <div className={styles.resourceBox}>
              <h3>The Dougy Center</h3>
              <p><strong>Phone:</strong> 1-866-775-5683</p>
              <p>Support for children, teens, young adults, and families grieving a death.</p>
            </div>
            <div className={styles.resourceBox}>
              <h3>The Compassionate Friends</h3>
              <p><strong>Phone:</strong> 1-877-969-0010</p>
              <p>Supporting families after the death of a child.</p>
            </div>
            <div className={styles.resourceBox}>
              <h3>TAPS (Tragedy Assistance Program for Survivors)</h3>
              <p><strong>Phone:</strong> 1-800-959-8277</p>
              <p>Support for those grieving the death of a military loved one.</p>
            </div>
          </section>

          <section className={styles.welcome}>
            <h2>Online Support Groups</h2>
            <div className={styles.resourceBox}>
              <h3>GriefShare</h3>
              <p>Find local support groups and online resources at <a href="https://www.griefshare.org" target="_blank" rel="noopener noreferrer">griefshare.org</a></p>
            </div>
            <div className={styles.resourceBox}>
              <h3>What's Your Grief</h3>
              <p>Online community and resources at <a href="https://whatsyourgrief.com" target="_blank" rel="noopener noreferrer">whatsyourgrief.com</a></p>
            </div>
          </section>

          <section className={styles.welcome}>
            <h2 id="coping">Coping Strategies</h2>
            <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '1rem auto' }}>
              <li><strong>Allow yourself to grieve:</strong> There's no right or wrong way to grieve. Your feelings are valid.</li>
              <li><strong>Take care of yourself:</strong> Eat well, rest, and exercise when you can.</li>
              <li><strong>Express your feelings:</strong> Talk to friends, write in a journal, or express yourself through art.</li>
              <li><strong>Seek support:</strong> Connect with support groups or a therapist.</li>
              <li><strong>Create rituals:</strong> Honor your loved one through memorial activities.</li>
              <li><strong>Be patient:</strong> Healing takes time, and grief comes in waves.</li>
              <li><strong>Limit major decisions:</strong> If possible, wait before making big life changes.</li>
            </ul>
          </section>

          <section className={styles.welcome}>
            <h2>Professional Help</h2>
            <p>
              Consider seeking professional help if you're experiencing:
            </p>
            <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '1rem auto' }}>
              <li>Prolonged intense grief that interferes with daily life</li>
              <li>Thoughts of self-harm or suicide</li>
              <li>Difficulty functioning in work or relationships</li>
              <li>Substance abuse as a way to cope</li>
              <li>Physical symptoms that concern you</li>
            </ul>
            <p>
              <strong>Find a therapist:</strong> Use directories like <a href="https://www.psychologytoday.com" target="_blank" rel="noopener noreferrer">Psychology Today</a> or 
              contact your insurance provider for covered providers.
            </p>
          </section>
        </div>

        <footer className={styles.footer}>
          <p>&copy; 2024 Grief Support Network. All rights reserved.</p>
        </footer>
      </main>
    </>
  )
}
