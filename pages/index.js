import parse from 'html-react-parser';

import Link from 'next/link';

import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import styles from '../styles/home.module.scss';

const URL = process.env.API_URL + 'posts/';

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
      <div className={styles.postsGrid}>
        {postList.map((post, index) => {
          const description = parse(post.description);
          return (
            <Link href={`/posts/${post.slug}`} key={post._id}>
              <a className={index === 2 ? styles.lastPostLink : styles.postLink}>
                <div>
                  <h3 className={utilStyles.headingMd}>{post.title}</h3>
                  {description}
                </div>
              </a>
            </Link>
          )})
        }
      </div>
    </Layout>
  )
}
