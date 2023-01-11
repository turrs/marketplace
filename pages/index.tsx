import Head from 'next/head';
import { Inter } from '@next/font/google';
import Headers from '../components/Headers';
import Navbar from '../components/NavBar';
import CategorySection from '../section/CategorySection';
import TitleCategory from '../components/TitleCategory';
import Catalog from '../section/Catalog';
import InfoSection from '../section/InfoSection';
import FooterSection from '../section/FootersSection';
import CategoryItem from '../components/CategoryItem';
import { asyncSetAllProduct } from '../states/Product/action';
import { useAppDispatch } from '../states';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" relative">
        <div className="hidden md:block gradient-02 inset-01 absolute w-[50%]" />
        <Headers />
        <Navbar />
        <CategorySection />
        <div className="hidden md:block gradient-02 inset-0 absolute w-[50%]" />
        <TitleCategory />
        <CategoryItem />
        <div className="py-12">
          <InfoSection />
        </div>
        <FooterSection />
      </main>
    </>
  );
}
