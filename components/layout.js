import Image from 'next/image';
import Link from 'next/link';

import Meta from './meta';
import Footer from './footer';
import styles from '../styles/layout.module.scss';
import utilStyles from '../styles/utils.module.scss';

const Layout = ({children, home, about}) => {
  return (
    <div className={styles.layout}>
      <Meta />
      <div className={styles.container}>
        <header className={styles.header}>
          {home && (
            <div>
              <div>
                <Image 
                  className={styles.image}
                  priority
                  src="/images/paul_graham.jpeg"
                  height={275}
                  width={500} 
                  alt="Paul Graham"/>
              </div> 
              <h1 className={utilStyles.heading2Xl, styles.homeTitle}>
                {"Paul Graham's Essays"}
              </h1> 
            </div> 
          )}
          {(!about && !home) && (
            <>
              <h2 className={utilStyles.headingXl}>Paul Graham on...</h2>
            </>
          )} 
          {about && (
            <h2 className={utilStyles.headingXl}>This is just an exercise...</h2>
          )}
        </header>
        {(!home && !about) && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>
                <span className={styles.arrowLink}>&#10094;</span>
                <span className={utilStyles.headingMd}>Back to home</span>
              </a>
            </Link>
          </div>
        )}
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>
                <span className={styles.arrowLink}>&#10094;</span>
                <span className={utilStyles.headingMd}>Back to home</span>
              </a>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
};

export default Layout;
