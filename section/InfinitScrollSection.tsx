"use client"

import React, { useEffect } from 'react';
// import InfinitScroll from '@/components/InfiniteScroll';
import Lenis from "@studio-freight/lenis";
import Image from 'next/image';
import portraits from '../data/horizScrollData.json';

const InfiniteScrollSection: React.FC = () => {

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      infinite: true,
      orientation: 'horizontal',
      gestureOrientation: "both",
    });


    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const repeatItems = (parentEl: HTMLElement, total: number = 1) => {
      const items = Array.from(parentEl.children);
      const length = items.length;

      for (let i = 0; i <= total; i++) {
        const index = i % length;
        const cln = items[index].cloneNode(true) as HTMLElement;
        parentEl.append(cln);
      }
    };

    const wrapElement = document.querySelector(".wrap");
    if (wrapElement) {
      repeatItems(wrapElement as HTMLElement, 6);
    }
  });


  return (
    <section>
      <div className='container'>
        <h1 className='fixed w-[100%] top-[10%] flex justify-center text-3xl md:text-5xl text-black/60 text-center fornt-bold mb-[60px]'>Horizontal Infinite Scroll</h1>
        <div className="wrap flex gap-4 w-min">
          {portraits.portraits.map((portrait) => (
            <Image
              key={portrait.id}
              src={portrait.src}
              alt={`Portrait ${portrait.id}`}
              width={460}
              height={640}
              className="block w-auto h-auto object-cover object-center rounded-[2rem]"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default InfiniteScrollSection
