import Link from 'next/link';

import styles from '../styles/footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        <Link href="/about" >
          <a>
            About this site
          </a>
        </Link>
        <a href="https://www.theodinproject.com/" target="_blank" rel="noreferrer">
          The Odin Project
        </a>
        <a href="https://en.wikipedia.org/wiki/Paul_Graham_(programmer)" target="_blank" rel="noreferrer">
          Meet Paul Graham
        </a>
        <a href="http://www.paulgraham.com/articles.html" target="_blank" rel="noreferrer">
          The Authentic Essays of Paul Graham
        </a>
      </nav>
    </footer>
  )
}; 

export default Footer;
