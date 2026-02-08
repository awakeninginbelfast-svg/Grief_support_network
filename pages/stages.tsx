import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

export default function Stages() {
  return (
    <>
      <Head>
        <title>Stages of Grief - Grief Support Network</title>
        <meta name="description" content="Understanding the stages of grief" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>Understanding Grief</h1>
        </header>

        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/resources" className={styles.navLink}>Resources</Link>
          <Link href="/stages" className={styles.navLink}>Stages of Grief</Link>
        </nav>

        <div className={styles.container}>
          <section className={styles.welcome}>
            <h2>The Five Stages of Grief</h2>
            <p>
              In 1969, psychiatrist Elisabeth Kübler-Ross introduced what became known as the 
              "five stages of grief." These stages are common experiences in the grieving process, 
              but it's important to know that:
            </p>
            <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '1rem auto' }}>
              <li>Not everyone experiences all stages</li>
              <li>They don't always occur in order</li>
              <li>People may move back and forth between stages</li>
              <li>The duration of each stage varies by person</li>
              <li>Everyone's grief journey is unique</li>
            </ul>
          </section>

          <section className={styles.cards}>
            <div className={styles.stageCard}>
              <h3>1. Denial</h3>
              <p>
                <strong>"This can't be happening."</strong>
              </p>
              <p>
                Denial helps us survive the initial shock of loss. It's a natural defense mechanism 
                that gives us time to process devastating news. During this stage, the world may 
                feel meaningless and overwhelming.
              </p>
            </div>

            <div className={styles.stageCard}>
              <h3>2. Anger</h3>
              <p>
                <strong>"Why is this happening? Who is to blame?"</strong>
              </p>
              <p>
                As denial fades, reality and pain re-emerge. This intense emotion may be redirected 
                toward other people, ourselves, doctors, or even the person who died. Anger is a 
                necessary stage that helps us process the pain.
              </p>
            </div>

            <div className={styles.stageCard}>
              <h3>3. Bargaining</h3>
              <p>
                <strong>"If only... What if..."</strong>
              </p>
              <p>
                We may find ourselves creating "what if" and "if only" statements. We might bargain 
                with a higher power, promising to change if our loved one returns. This stage often 
                comes with feelings of guilt.
              </p>
            </div>

            <div className={styles.stageCard}>
              <h3>4. Depression</h3>
              <p>
                <strong>"I'm too sad to do anything."</strong>
              </p>
              <p>
                As we begin to understand the true magnitude of the loss, sadness grows. This is not 
                a sign of mental illness but an appropriate response to loss. It's important to allow 
                ourselves to feel this sadness rather than trying to fix it.
              </p>
            </div>

            <div className={styles.stageCard}>
              <h3>5. Acceptance</h3>
              <p>
                <strong>"This happened, and I'll be okay."</strong>
              </p>
              <p>
                Acceptance doesn't mean we're "okay" with the loss. It means we acknowledge the reality 
                and learn to live with it. We begin to have more good days than bad, though we may 
                always carry some grief with us.
              </p>
            </div>
          </section>

          <section className={styles.welcome}>
            <h2>Other Models of Grief</h2>
            <p>
              The five stages are just one model. Other frameworks include:
            </p>
            <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '1rem auto' }}>
              <li><strong>The Four Tasks of Mourning</strong> (William Worden): Accepting the reality, 
              experiencing the pain, adjusting to life without the deceased, and finding a way to remember 
              while moving forward.</li>
              <li><strong>The Dual Process Model</strong> (Stroebe and Schut): Oscillating between 
              loss-oriented coping and restoration-oriented coping.</li>
              <li><strong>Continuing Bonds</strong>: Maintaining a connection with the deceased while 
              moving forward with life.</li>
            </ul>
          </section>

          <section className={styles.welcome}>
            <h2>Remember</h2>
            <p>
              Grief is not linear. You may experience these stages in any order, revisit stages, 
              or not experience some at all. Your grief is as unique as your relationship with your 
              loved one. Be patient and compassionate with yourself.
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
