'use client';
import Head from 'next/head';

import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Gettouch from '@/components/gettouch';
import MyProject from '@/components/myproject';
import Thyself from '@/components/myself';
import NavBar from '@/components/nav';
import Resume from '@/components/resume';
import Skill from '@/components/skill';
import Typewrite from '@/components/typo';

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
