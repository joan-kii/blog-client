import Image from 'next/image';
import Link from 'next/link';

import Meta from './meta';
import styles from '../styles/layout.module.scss';
import utilStyles from '../styles/utils.module.scss';

const Layout = ({children, home}) => {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <header className={styles.header}>
          {home ? (
            <div>
              <div>
                <Image 
                  className={styles.image}
                  priority
                  src="/images/paul_graham.jpeg"
                  height={375}
                  width={700} 
                  alt="Paul Graham"/>
              </div> 
              <h1 className={utilStyles.heading2Xl, styles.homeTitle}>
                {"Paul Graham's Essays"}
              </h1> 
            </div> 
          ) : (
            <>
              <h2 className={utilStyles.headingXl}>Paul Graham on...</h2>
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
