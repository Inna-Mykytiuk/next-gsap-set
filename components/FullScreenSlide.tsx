"use client";

import React, { useEffect } from "react";
import Image from 'next/image';
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { slidesData } from '@/data/verticalSlides';

gsap.registerPlugin(Observer);
type SlideProps = {
  id: number;
  src: string;
  alt: string;
};

type DOMElements = {
  el: HTMLElement | null;
  slides: HTMLElement[];
  slidesInner: HTMLElement[];
};

const Slide = ({ id, src, alt }: SlideProps) => {
  return (
    <div className="slide w-full [grid-area:1_/1_/-1_/-1] pointer-events-none opacity-0 overflow-hidden relative grid place-items-center">
      <div className="fixed text-white font-bold w-full z-10 flex justify-end items-start pr-[20px] pt-[20px] text-5xl">
        {id}.
      </div>
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={1440}
        className="slide_img w-full h-auto object-cover object-center bg-cover bg-[50% 50%] bg-no-repeat"
      />
    </div>
  );
};

function FullScreenSlide() {
  useEffect(() => {


    const NEXT = 1;
    const PREV = -1;

    class Slideshow {
      DOM: DOMElements;
      current: number;
      slidesTotal: number;
      isAnimating: boolean;

      constructor(DOM_el: HTMLElement) {
        this.DOM = {
          el: DOM_el,
          slides: Array.from(DOM_el.querySelectorAll('.slide') as NodeListOf<HTMLElement>),
          slidesInner: [],
        };
        this.current = 0;
        this.slidesTotal = this.DOM.slides.length;
        this.isAnimating = false;

        this.DOM.slidesInner = this.DOM.slides.map((item) =>
          item.querySelector('.slide_img') as HTMLElement
        );

        if (this.DOM.slides[this.current]) {
          this.DOM.slides[this.current].classList.add('slide_current');
        }
      }

      navigate(direction: number) {
        if (this.isAnimating) return;

        this.isAnimating = true;
        const previous = this.current;

        if (direction === NEXT) {
          this.current = this.current < this.slidesTotal - 1 ? this.current + 1 : 0;
        } else if (direction === PREV) {
          this.current = this.current > 0 ? this.current - 1 : this.slidesTotal - 1;
        }

        const currentSlide = this.DOM.slides[previous];
        const currentInner = this.DOM.slidesInner[previous];

        const upcomingSlide = this.DOM.slides[this.current];
        const upcomingInner = this.DOM.slidesInner[this.current];

        gsap.timeline({
          defaults: {
            duration: 1.5,
            ease: 'power4.inOut',
          },
          onStart: () =>
            this.DOM.slides[this.current].classList.add('slide_current'),

          onComplete: () => {
            this.DOM.slides[previous].classList.remove('slide_current')
          },
        })
          .addLabel('start', 0)
          .to(currentSlide, {
            yPercent: -direction * 100,
          },
            'start'
          )
          .to(currentInner, {
            yPercent: direction * 30,
          },
            'start'
          )
          .fromTo(upcomingSlide, {
            yPercent: direction * 100,
          }, {
            yPercent: 0,
          },
            'start'
          )
          .fromTo(upcomingInner, {
            yPercent: -direction * 30,
          }, {
            yPercent: 0,
          },
            'start'
          )

      }

      next() {
        this.navigate(NEXT);
      }

      prev() {
        this.navigate(PREV);
      }
    }

    const slides = document.querySelector('.slides') as HTMLElement;
    if (!slides) return;

    const slideshow = new Slideshow(slides);

    Observer.create({
      type: 'wheel, touch, pointer',
      onDown: () => slideshow.prev(),
      onUp: () => slideshow.next(),
      wheelSpeed: -1,
      tolerance: 10,
    });
  }, []);

  return (
    <div className="slides w-full h-screen overflow-hidden grid grid-rows-[100%] grid-cols-[100%] place-items-center">
      {slidesData.map((slide) => (
        <Slide key={slide.id} {...slide} />
      ))}
    </div>
  );
}

export default FullScreenSlide;
