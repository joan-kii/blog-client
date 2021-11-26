import Image from 'next/image';
import Link from 'next/link';

import Meta from './meta';
import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';

const Layout = ({children, home}) => {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <header className={styles.header}>
          {home ? (
            <>
              <Image 
                className={styles.image}
                priority
                src="/images/paul_graham.jpeg"
                height={450}
                width={800} 
                alt="Paul Graham"/>
              <h1 className={utilStyles.heading2Xl}>Paul Graham On...</h1> 
            </> 
          ) : (
            <>
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
              <a>Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </>
  )
};

export default Layout;
