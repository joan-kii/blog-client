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
  const response= await fetch(URL, options);
  const postList = await response.json();
  return {props: {postList}};
}

export default function Home({ postList }) {
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
        {postList.map((post) => (
          <Link href={`/posts/${post.slug}`} key={post.id}>
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
