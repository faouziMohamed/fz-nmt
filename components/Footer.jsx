import styles from '../styles/Home.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Powered by{' '}
        <a
          href='https://github.com/faouziMohamed/'
          target='_blank'
          rel='noopener noreferrer'>
          <span className={styles.link}>Faouzi Mohamed</span>
        </a>{' '}
        | Machine Translation | Copyright &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
