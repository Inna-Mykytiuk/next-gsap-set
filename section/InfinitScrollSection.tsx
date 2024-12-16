"use client"

import React, { useEffect } from 'react';

import Lenis from "@studio-freight/lenis";
import Image from 'next/image';
import { portraits } from '@/data/horizScrollData';

// const portraits = [
//   { id: 1, src: "/images/portraits/p1.png" },
//   { id: 2, src: "/images/portraits/p2.png" },
//   { id: 3, src: "/images/portraits/p3.png" },
//   { id: 4, src: "/images/portraits/p4.png" },
//   { id: 5, src: "/images/portraits/p5.png" },
//   { id: 6, src: "/images/portraits/p6.png" },
// ];

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

    const repeatItems = (parentEl: HTMLElement, total: number = 0) => {
      const items = Array.from(parentEl.children);

      for (let i = 0; i <= total - 1; i++) {
        items.forEach((item) => {
          const cln = item.cloneNode(true) as HTMLElement;
          parentEl.append(cln);
        });
      }
    };

    const wrapElement = document.querySelector(".wrap");
    if (wrapElement) {
      repeatItems(wrapElement as HTMLElement, 4);
    }
  }, []);


  return (
    <section>
      <div className='container'>
        <h1 className="fixed top-[10%] flex my-auto justify-center text-3xl md:text-5xl text-black/60 text-center font-bold ">
          Horizontal Infinite Scroll
        </h1>
        <div className="w-min flex gap-4">
          <div className="wrap">
            {portraits.map((portrait, index) => (
              <Image
                key={`${portrait.id}-${index}`}
                src={portrait.src}
                alt={`Portrait ${portrait.id}`}
                width={560}
                height={640}

                className="h-[100%] min-w-[100%] w-[100%] object-cover object-center rounded-[2rem]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfiniteScrollSection
