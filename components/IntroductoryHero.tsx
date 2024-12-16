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
  });


  return (
    <div
      ref={containerRef}
      className='flex flex-col justify-center items-center min-h-screen relative overflow-hidden'>
      <h1
        ref={textRef}
        className='uppercase text-4xl text-center md:text-[80px] font-agu xxl:text-[10rem] text-gray-300 absolute top-[60px] md:top-[6rem] xl:top-[10rem]  z-20 leading-[1]'>
        Wonderful Tattoo
      </h1>
      <div className='w-full sm:w-[460px] h-[620px] xxl:w-[700px] xxl:h-[820px] bg-[#858480] rounded-t-full absolute bottom-0 z-10' />
      {/* <Image
        ref={leafRef}
        priority
        style={leafStyle}
        src="/images/plant.png" alt="plant" width={1440} height={500} className='hidden md:block absolute bottom-0 z-0 xxl:w-[1440px] object-cover object-center' /> */}
      <Image
        ref={leafRef}
        priority
        style={{ objectFit: 'cover' }}
        src="/images/plant.png"
        alt="plant"
        width={1400}
        height={700}
        className='hidden md:block absolute bottom-0 z-0 xxl:w-[1400px] object-cover object-center'
      />
      <Image
        ref={girlRef}
        priority
        src="/images/girl5.png" alt="girl" width={560} height={640} className='absolute bottom-[-20px] z-20 w-auto max-h-full md:max-h-[700px] xxl:max-h-full object-cover object-center' />
    </div>
  )
}

export default IntroductoryHero
