'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'

import Contact from '@/components/home/Contact'
import Footer from '@/components/home/Footer'
import Gallery from '@/components/home/galleries/Gallery'
import Skill from '@/components/home/skills/Skills'
import Header from '@/components/home/Header'
import Hero from '@/components/home/Hero'

import AOS from 'aos'
import 'aos/dist/aos.css'

const [About, Resume, Blog] = [
  dynamic(() => import("@/components/home/About"), { ssr: false }),
  dynamic(() => import("@/components/home/Resume"), { ssr: false }),
  dynamic(() => import("@/components/home/Blog"), { ssr: false })
];

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
      
      <Header />
      <Hero />

      <main id="main">
        <About />
        <Skill />
        <Resume />
        <Gallery />
        <Blog />
        <Contact />
      </main>

      <Footer />

      <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}