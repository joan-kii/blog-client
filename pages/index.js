import Link from 'next/link';

import Layout from '../components/layout';
import styles from '../styles/home.module.scss';

const parse = require('html-react-parser');

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
      {postList.map((post) => {
        const description = parse('<p>Hello World</p>');
        return (
          <Link href={`/posts/${post.slug}`} key={post.id}>
            <a>
              <div className={styles.postLink}>
                <h3>{post.title}</h3>
                {description}
              </div>
            </a>
          </Link>
        )
      })}
      <Link href="/about">
        <a>About</a>
      </Link>
    </Layout>
  )
}
