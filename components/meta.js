import Head from 'next/head';

const siteTitle = "Paul Graham's Essays";

export default function Meta() {
  return(
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={siteTitle} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
