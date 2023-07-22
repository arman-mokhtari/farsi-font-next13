import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://workfolio.ir"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://workfolio.ir/assets/svg/workfolio-dark.svg"
              alt="workfolio Logo"
              className={styles.vercelLogo}
              width={150}
              height={150}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://workfolio.ir"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            سلام بر دنیا <span> -&gt;</span>
          </h2>
          <p>
            نحوه اضافه کردن فونت فارسی به همراه تم های متفاوت در نکست جی اس با
            بهره گیری از نکست فونت و متریال یو ای
          </p>
        </a>
      </div>
    </main>
  );
}
