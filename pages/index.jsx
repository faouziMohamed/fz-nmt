import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

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
  const pageMetadata = {
    title: `Fz Machine Translator`,
    description: 'Web app for machine translation',
  };
  return (
    <Layout pageMetadata={pageMetadata} home>
      <Row1Body langs={langs} />
    </Layout>
  );
}

function Row1Body({ langs }) {
  return (
    <section className={styles.row1}>
      <HomePageTitle />
      <IOTranslation langs={langs} />
    </section>
  );
}

export function HomePageTitle() {
  return (
    <header>
      <h1 className={styles.title}>
        Welcome to <span className={styles.title_sub0}>Fz Machine</span>
        <span className={styles.title_sub1}>Translator</span>
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
              readOnly={data.label.toLowerCase() === 'target'}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function InputTextArea({ readOnly, className }) {
  return (
    <textarea className={className} rows='1' readOnly={readOnly}></textarea>
  );
}

function LanguageSelection({ label, languages, name }) {
  return (
    <div className={styles.selection_lang}>
      <label htmlFor='translation'>{label}</label>
      <select name={name} id='' className={styles.select}>
        {languages.map((lang, index) => (
          <option value={index} key={index}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
}
