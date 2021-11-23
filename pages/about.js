import Layout from '../components/layout';

import Head from 'next/head';
import Link from 'next/link';

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About this site</title>
      </Head>
      <h1>About</h1>
      <h2>
        <Link href="/">
          <a>Back to home.</a>
        </Link>
      </h2>
    </Layout>
  )
};

export default About;
