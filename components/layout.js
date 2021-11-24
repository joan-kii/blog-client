import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';

const name = 'Paul Graham On...';
export const siteTitle = "Paul Graham's Essays";

const Layout = ({children, home}) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="../public/favicon.icon" />
        <meta 
          property="description"
          content="Paul Grham's Essays" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image 
              priority
              src="/images/paul_graham.jpeg"
              height={450}
              width={800} 
              alt="Paul Graham"/>
            <h1 className={utilStyles.heading2Xl}>{name}</h1> 
          </> 
        ) : (
          <>
            <Link href="/">
              <a>
              <Image 
                priority
                src="/images/paul_graham.jpeg"
                height={450}
                width={800} 
                alt="Paul Graham"/>
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={utilStyles.backToHome}>
          <Link href="/">
            <a>← Bac to home</a>
          </Link>
        </div>
      )}
    </div>
  )
};

export default Layout;
