import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const name = 'Paul Graham';
export const siteTitle = "Paul Graham's Essays";

const Layout = ({children, home}) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="../public/favicon.icon" />
        <meta 
          property="description"
          content="Paul Grham's Essays" />
          {/* Seguir por header */}
      </Head>
      {children}
    </div>
  )
};

export default Layout;
