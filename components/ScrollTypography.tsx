"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const ScrollTypography = () => {
  const lenis = useRef<Lenis | null>(null);
  const text = new SplitType(".target");
  const chars = text.chars as HTMLElement[];


  useEffect(() => {
    const initSmooth = () => {
      lenis.current = new Lenis({
        lerp: 0.2,
        smoothWheel: true,
      });

      lenis.current?.on("scroll", () => ScrollTrigger.update());

      const scrollFn = (time: number) => {
        lenis.current?.raf(time);
        requestAnimationFrame(scrollFn);
      };

      requestAnimationFrame(scrollFn);
    };

    const scroll = () => {
      chars.forEach((char) => gsap.set(char, { perspective: 600 }));

      gsap.fromTo(
        chars,
        {
          willChange: "opacity, transform",
          opacity: 0,
          z: -600,
        },
        {
          easy: "back.out(1.5)",
          opacity: 1,
          z: 0,
          stagger: 0.04,
          scrollTrigger: {
            trigger: ".target",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      )
    }


    const init = () => {
      initSmooth();
      scroll();
    }

    init();

  });


  return (
    <div>
      <p className="absolute top-0 w-full h-[100vh] flex justify-center items-center uppercase text-4xl">
        Scroll Down For The Typo Animation
      </p>
      <div className="flex flex-col w-screen relative px-8 py-6 mt-[1400px]">
        <h2 className="content-title text-[8vw] leading-[0.8] text-center grid gap-8">
          <span className="uppercase target">Dream Big</span>
          <span className="uppercase target">Never Settle</span>
          <span className="uppercase target mb-[100px]">Never Quit</span>
        </h2>
      </div>

      <div className="flex flex-col w-screen relative px-8 py-6 mb-[350px]">
        <p className="max-w-[600px] mx-auto my-6 text-[1.25rem] leading-normal">
          Dreaming big inspires us to reach beyond our current circumstances, to
          imagine a future that exceeds our present reality. It&apos;s about setting
          audacious goals and believing in our ability to achieve them, regardless of
          the obstacles we may face along the way.
        </p>
      </div>
    </div>
  );
};

export default ScrollTypography;
