import Head from 'next/head';
import { Header } from '@/components/index';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
}
