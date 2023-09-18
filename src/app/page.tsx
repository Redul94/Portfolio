'use client';
import Head from 'next/head';
import NavBar from '@/components/nav';
import Typewrite from '@/components/typo';
import Thyself from '@/components/myself';
import Resume from '@/components/resume';
import Skill from '@/components/skill';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Gettouch from '@/components/gettouch';
import MyProject from '@/components/myproject';

export default function HomePage() {
  return (
    <div className='mx-auto  bg-slate-700'>
      <Head>
        <title>Redul Hossen</title>
      </Head>
      <main className=' text-white'>
        <NavBar />
        <Typewrite />
        <Thyself />
        <Resume />
        <Skill />
        <MyProject />
        <Gettouch />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
