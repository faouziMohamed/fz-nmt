import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export async function getServerSideProps() {
  const SITE_URL = process.env.SITE_URL_BASE;
  const response = await fetch(`${SITE_URL}/api/lang`);
  let { data } = await response.json();
  return {
    props: {
      langs: data,
    },
  };
}

export default function Home({ langs }) {
  return (
    <div className={`${styles.app} ${styles.container}`} id="app">
      <PageDescription />
      <Header />
      <div className={`${styles.root}`}>
        <main className={`${styles.main}`}>
          <Row1Body langs={langs} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

function PageDescription() {
  return (
    <Head>
      <title>Fz Machine Translator</title>
      <meta name="description" content="Web app for machine translation" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
}

function Row1Body({ langs }) {
  return (
    <section className={styles.row1}>
      <PageTitle />
      <IOTranslation langs={langs} />
    </section>
  );
}

function PageTitle() {
  return (
    <header>
      <h1 className={styles.title}>
        Welcome to <span className={styles.title_machine}>Fz Machine</span>
        <span className={styles.title_translator}>Translator</span>
      </h1>
    </header>
  );
}

function IOTranslation({ langs }) {
  return (
    <section className={styles.translation}>
      <div className={styles.source_target_wrapper}>
        {langs.map((data, index) => (
          <div className={styles.io_wrapper} key={index}>
            <LanguageSelection
              label={data.label}
              languages={data.languages}
              name={data.name}
            />
            <InputTextArea
              className={data.className}
              readOnly={data.label.toLowerCase() == "target"}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function InputTextArea({ readOnly, className }) {
  return (
    <textarea className={className} rows="1" readOnly={readOnly}></textarea>
  );
}

function LanguageSelection({ label, languages, name }) {
  return (
    <div className={styles.selection_lang}>
      <label htmlFor="translation">{label}</label>
      <select name={name} id="" className={styles.select}>
        {languages.map((lang, index) => (
          <option value={index} key={index}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
}
