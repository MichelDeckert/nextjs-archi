import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';

export default function Home() {
  return (
    <>
      <Head>
        <title>Digital Project</title>
        <link href="./favicon.svg" type="image/svg+xml" rel="icon" />
      </Head>
      <Hero />
      <About />
    </>
  );
}
