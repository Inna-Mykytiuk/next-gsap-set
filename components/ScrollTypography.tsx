"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const ScrollTypography = () => {
  useEffect(() => {
    // Розбиваємо текст на символи (chars)
    const text = new SplitType(".target", { types: "chars" });
    const chars = text.chars as HTMLElement[];

    // Ініціалізація плавного скролінгу
    const lenis = new Lenis({
      lerp: 0.2,
      smoothWheel: true,
    });

    lenis.on("scroll", () => ScrollTrigger.update());

    const scrollFn = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(scrollFn);
    };

    requestAnimationFrame(scrollFn);

    // Додаємо перспективу до контейнерів символів
    chars.forEach((char) => {
      if (char.parentNode) {
        gsap.set(char.parentNode, { perspective: 1000 });
      }
    });

    // Анімація для кожної літери
    gsap.fromTo(
      chars,
      {
        willChange: "opacity, transform",
        opacity: 0,
        z: -600,
        // rotateX: -90, // Додатковий ефект обертання
      },
      {
        ease: "back.out(1.5)",
        opacity: 1,
        z: 0,
        // rotateX: 0,
        stagger: 0.04, // Регулюємо інтервал між літерами
        scrollTrigger: {
          trigger: ".target",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="w-full">
      <div className="container">
        <div className="w-full h-[100vh] flex  justify-center items-center uppercase text-4xl text-black">
          <div>
            <p className="max-w-[600px] mx-auto my-6 text-[1.25rem] leading-normal text-black">
              Dreaming big inspires us to reach beyond our current circumstances, to
              imagine a future that exceeds our present reality. It&apos;s about setting
              audacious goals and believing in our ability to achieve them, regardless of
              the obstacles we may face along the way.
            </p>
            <p className="max-w-[600px] mx-auto my-6 text-[1.25rem] leading-normal text-black">
              Dreaming big inspires us to reach beyond our current circumstances, to
              imagine a future that exceeds our present reality. It&apos;s about setting
              audacious goals and believing in our ability to achieve them, regardless of
              the obstacles we may face along the way.
            </p>
          </div>
          <div>
            <p className="max-w-[600px] mx-auto my-6 text-[1.25rem] leading-normal text-black">
              Dreaming big inspires us to reach beyond our current circumstances, to
              imagine a future that exceeds our present reality. It&apos;s about setting
              audacious goals and believing in our ability to achieve them, regardless of
              the obstacles we may face along the way.
            </p>
            <p className="max-w-[600px] mx-auto my-6 text-[1.25rem] leading-normal text-black">
              Dreaming big inspires us to reach beyond our current circumstances, to
              imagine a future that exceeds our present reality. It&apos;s about setting
              audacious goals and believing in our ability to achieve them, regardless of
              the obstacles we may face along the way.
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col relative px-8 py-6 ">
            <p className="font-bold text-[8vw] leading-[0.8] text-center grid gap-8 text-black">
              <span className="uppercase target">Dream Big</span>
              <span className="uppercase target">Never Settle</span>
              <span className="uppercase target mb-[100px]">Never Quit</span>
            </p>
          </div>

          <div className="flex flex-col relative px-8 py-6 mb-[250px]">
            <p className="max-w-[600px] mx-auto my-6 text-[1.25rem] leading-normal text-black">
              Dreaming big inspires us to reach beyond our current circumstances, to
              imagine a future that exceeds our present reality. It&apos;s about setting
              audacious goals and believing in our ability to achieve them, regardless of
              the obstacles we may face along the way.
            </p>
            <p className="max-w-[600px] mx-auto my-6 text-[1.25rem] leading-normal text-black">
              Dreaming big inspires us to reach beyond our current circumstances, to
              imagine a future that exceeds our present reality. It&apos;s about setting
              audacious goals and believing in our ability to achieve them, regardless of
              the obstacles we may face along the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollTypography;
