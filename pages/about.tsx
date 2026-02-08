import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Grief Support Network</title>
        <meta name="description" content="Learn about the Grief Support Network" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>About Us</h1>
        </header>

        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/resources" className={styles.navLink}>Resources</Link>
          <Link href="/stages" className={styles.navLink}>Stages of Grief</Link>
        </nav>

        <div className={styles.container}>
          <section className={styles.welcome}>
            <h2>Our Mission</h2>
            <p>
              The Grief Support Network exists to provide compassionate support, accurate information, 
              and valuable resources to individuals navigating the difficult journey of grief and loss.
            </p>
          </section>

          <section className={styles.welcome}>
            <h2>Why We Created This Network</h2>
            <p>
              Grief can be an isolating experience. Many people struggle to find the support they need, 
              or don't know where to turn when they're grieving. We created this network to:
            </p>
            <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '1rem auto' }}>
              <li>Provide a centralized hub for grief support resources</li>
              <li>Help people understand that their feelings are valid and normal</li>
              <li>Connect individuals with professional help when needed</li>
              <li>Offer education about the grieving process</li>
              <li>Create a compassionate space for healing</li>
            </ul>
          </section>

          <section className={styles.welcome}>
            <h2>What We Offer</h2>
            <p>
              Our network provides access to various support resources including crisis hotlines, 
              support groups, counseling services, and educational materials about grief. We recognize 
              that everyone's grief journey is unique, and we aim to provide resources for various 
              types of loss and grief experiences.
            </p>
          </section>

          <section className={styles.welcome}>
            <h2>Important Disclaimer</h2>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>
              The Grief Support Network is an informational resource and is not a substitute for 
              professional medical or mental health care. If you are experiencing a mental health 
              crisis, please contact emergency services or a crisis hotline immediately.
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
