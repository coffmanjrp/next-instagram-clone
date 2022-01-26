import Head from 'next/head';
import { Feed, Header, Modal } from '@/components/index';

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex, nofollow" />
        <title>Next Instagram</title>
      </Head>

      <Header />
      <Feed />
      <Modal />
    </div>
  );
}
