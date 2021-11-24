import Head from 'next/head';
import Link from 'next/link';

import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.scss';

const URL = 'http://localhost:5000/posts';
const options = {
  method: 'GET',
  mode: 'cors',
  headers: {
  'Content-Type': 'application/json'
  }
};

export async function getStaticProps() {
  const postList = await fetch(URL, options);
  const data = await postList.json();
  return {props:{data}};
}

export default function Home({ data }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteTitle} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.headingMd}>
      <p>[Your Self Introduction]</p>
      <p>(This is a sample website - you’ll be building a site like this on{' '}
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
      </p>
      </section>
      <section>
        {data.map((post, index) => (
          // Link to component slug route
          <Link href="/" key={index}>
            <a>{post.title}</a>
          </Link>
        ))}
      </section>
      <Link href="/about">
        <a>About</a>
      </Link>
    </Layout>
  )
}
