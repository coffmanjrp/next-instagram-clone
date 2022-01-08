import Head from 'next/head';
import { Feed, Header, Modal } from '@/components/index';

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Next Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Feed />
      <Modal />
    </div>
  );
}
