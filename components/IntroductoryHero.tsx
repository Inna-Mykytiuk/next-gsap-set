"use client"

import React, { useRef } from 'react';
import Image from 'next/image';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IntroductoryHero = () => {

  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const leafRef = useRef(null);
  const girlRef = useRef(null);

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "50% 50%",
        // markers: true,
        scrub: true
      }
    })

    tl.to(textRef.current, {
      y: -300,
    }, 'a')
      .to(leafRef.current, {
        scale: 1.2
      }, 'a')
      .to(girlRef.current, {
        scale: 1.3
      }, 'a')
      .to(containerRef.current, {
        y: 400
      }, 'a')

  })



  return (
    <div
      ref={containerRef}
      className='flex flex-col justify-center items-center min-h-screen relative overflow-hidden'>
      <h1
        ref={textRef}
        className='uppercase text-[6rem] md:text-[8rem] font-agu xxl:text-[10rem] text-white absolute top-[10rem] z-20'>
        Wonderful Tattoo
      </h1>
      <div className='w-[500px] h-[620px] xxl:w-[700px] xxl:h-[820px] bg-[#858480] rounded-t-full absolute bottom-0 z-10' />
      <Image
        ref={leafRef}
        src="/images/plant.png" alt="plant" width={1440} height={500} className='absolute bottom-0 w-[1200px] z-0 xxl:w-[1440px]' />
      <Image
        ref={girlRef}
        src="/images/girl5.png" alt="plant" width={560} height={640} className='absolute bottom-[-20px] w-[420px] z-20 xxl:w-[560px]' />
    </div>
  )
}

export default IntroductoryHero
