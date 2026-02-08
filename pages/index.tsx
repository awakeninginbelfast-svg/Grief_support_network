import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Grief Support Network - You Are Not Alone</title>
        <meta name="description" content="A supportive community for those experiencing grief and loss" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>Grief Support Network</h1>
          <p className={styles.subtitle}>You Are Not Alone</p>
        </header>

        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/resources" className={styles.navLink}>Resources</Link>
          <Link href="/stages" className={styles.navLink}>Stages of Grief</Link>
        </nav>

        <div className={styles.container}>
          <section className={styles.welcome}>
            <h2>Welcome to the Grief Support Network</h2>
            <p>
              Losing someone we love is one of life's most difficult experiences. 
              Grief is a natural response to loss, and everyone experiences it differently. 
              This network is here to provide support, resources, and understanding during your journey through grief.
            </p>
          </section>

          <section className={styles.cards}>
            <div className={styles.card}>
              <h3>Understanding Grief</h3>
              <p>
                Grief is a personal journey with no right or wrong way to feel. 
                Learn about the different aspects of grief and how to navigate your emotions.
              </p>
              <Link href="/stages" className={styles.cardLink}>Learn More →</Link>
            </div>

            <div className={styles.card}>
              <h3>Support Resources</h3>
              <p>
                Access helplines, support groups, and professional counseling services 
                to help you through this difficult time.
              </p>
              <Link href="/resources" className={styles.cardLink}>Find Support →</Link>
            </div>

            <div className={styles.card}>
              <h3>Coping Strategies</h3>
              <p>
                Discover healthy ways to cope with grief, from self-care practices 
                to memorial activities that honor your loved one.
              </p>
              <Link href="/resources#coping" className={styles.cardLink}>Explore →</Link>
            </div>
          </section>

          <section className={styles.emergency}>
            <h3>🆘 In Crisis?</h3>
            <p>
              If you're in crisis or having thoughts of self-harm, please reach out immediately:
            </p>
            <ul>
              <li><strong>National Suicide Prevention Lifeline:</strong> 988 or 1-800-273-8255</li>
              <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
              <li><strong>International Association for Suicide Prevention:</strong> <a href="https://www.iasp.info/resources/Crisis_Centres/">Find your local helpline</a></li>
            </ul>
          </section>
        </div>

        <footer className={styles.footer}>
          <p>&copy; 2024 Grief Support Network. All rights reserved.</p>
          <p>Created with compassion for those navigating grief.</p>
        </footer>
      </main>
    </>
  )
}
