"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
// import Lenis from "@studio-freight/lenis";
import splitStringUsingRegex from "@/utils/splitStrUsingRegex";

import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const ScrollTypography = () => {

  //GSAP ANIMATION  
  useEffect(() => {
    // Розбиваємо текст на символи (chars)
    const text = new SplitType(".target", { types: "chars" });
    // const titleAn = new SplitType(".title", { types: "chars" });
    const chars = text.chars as HTMLElement[];
    // const titleChars = titleAn.chars as HTMLElement[];

    // Ініціалізація плавного скролінгу/але краще створити окремий обгортаючий компонент і використовувати на кожній сторінці, щоб не дублювати код!!
    // const lenis = new Lenis({
    //   lerp: 0.2,
    //   smoothWheel: true,
    // });

    // lenis.on("scroll", () => ScrollTrigger.update());

    // const scrollFn = (time: number) => {
    //   lenis.raf(time);
    //   requestAnimationFrame(scrollFn);
    // };
    // requestAnimationFrame(scrollFn);


    //Title Animation GSAP

    // gsap.to(".title", {
    //   duration: 2,
    //   text: "Masters of Stealth and Precision",
    //   ease: "power1.out",
    //   repeat: 2,
    //   repeatDelay: 1,
    //   repeatRefresh: true,
    //   yoyo: true,
    // });


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
      },
      {
        ease: "back.out(1.5)",
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
    );
  }, []);

  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 }
  }

  //Title ANIMATION
  const heading = "Wizards of Discretion and Precision";
  const headingSplitting = splitStringUsingRegex(heading);


  return (
    <>
      <section className="w-full bg-snakeBg bg-cover bg-no-repeat font-audi text-[#e5a52a]">
        <div className="container">
          <div className="w-full h-[100vh] flex flex-col items-center md:items-start pt-[100px] xl:pt-[180px] justify-center md:justify-start">
            {/* <div className="max-w-[800px] xl:max-w-[1000px] text-center md:text-start font-bold text-[40px] sm:text-[60px] md:text-[80px] leading-tight mb-[40px] title">Wizards of Discretion and Precision</div> */}
            <motion.p
              initial="hidden"
              whileInView="reveal"
              transition={{ staggerChildren: 0.1 }}
              className="max-w-[800px] xl:max-w-[1000px] text-center md:text-start font-bold text-[40px] sm:text-[60px] xl:text-[60px] leading-tight mb-[40px] title">
              {headingSplitting.map((char, index) => (
                <motion.span key={index} transition={{ duration: 1.5 }} variants={charVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.p>

            {/*Text */}
            {/* <p className="max-w-[500px] text-base leading-normal mr-auto text">
              Slither into the enigmatic world of snakes, where limbless
              wonders navigate silently, employing lethal tactics and serving
              as guardians of ecological balance.
            </p> */}
          </div>
        </div>
      </section>

      <section className="bg-[#06090d]  font-audi w-full h-[100vh] flex flex-col">
        <div className="container">
          <div className="flex flex-col relative px-8 py-6 text-[#e5a52a] pt-[100px] mb-[40px] xl:mb-[100px]">
            <p className="font-bold text-[5.5vw] leading-[0.8] text-center grid gap-8">
              <span className="uppercase target">Dream Big</span>
              <span className="uppercase target">Never Settle</span>
              <span className="uppercase target ">Never Quit</span>
            </p>
          </div>

          <div className="flex flex-col relative px-8 py-6 justify-center items-center gap-6 text-[#e5a52a]">
            <p className="max-w-[600px] text-base leading-normal">
              Dreaming big inspires us to reach beyond our current circumstances, to
              imagine a future that exceeds our present reality. It&apos;s about setting
              audacious goals and believing in our ability to achieve them, regardless of
              the obstacles we may face along the way.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScrollTypography;
