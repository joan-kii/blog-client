import Layout from '../../components/layout';

const URL_POSTLIST = 'http://localhost:5000/posts/';
const options = {
  method: 'GET',
  mode: 'cors',
  headers: {
  'Content-Type': 'application/json'
  }
};

export default function Post({post}) {
  return (
    <Layout>
      <h1>{post.title}</h1>
      <p>{post.text}</p>
    </Layout>
  );
}

export async function getStaticPaths() {
  const response = await fetch(URL_POSTLIST, options);
  const postList = await response.json();
  const paths = postList.map(post => {
    return {
      params: {
        id: post.slug
      }
    }
  })
  return {
    paths,
    fallback:false
  }
}

export async function getStaticProps({ params }) {
  const URL_SINGLE_POST = `http://localhost:5000/posts/${params.id}`;
  const response = await fetch(URL_SINGLE_POST, options);
  const post = await response.json();
  return {props: {post}};
}
