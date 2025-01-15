"use client";

import React, { MouseEvent } from 'react';
import Image from 'next/image';
import { rocks } from "../data/accordionData";

const Accordion = () => {
  const animation = (e: MouseEvent<HTMLDivElement>) => {
    const cards = document.querySelectorAll<HTMLDivElement>('.card');

    const reset = () => {
      cards.forEach((card) => {
        card.classList.remove('animation');
      });
    };

    if (!e.target || !(e.target as HTMLElement).closest('.card')) return;

    reset();
    const parentCard = (e.target as HTMLElement).closest('.card');
    parentCard?.classList.add('animation');
  };

  return (
    <div className='h-auto grid place-items-center'>
      <div className='flex gap-[0.15rem] p-[0.15rem]'>
        {rocks.map((rock, index) => (
          <div
            key={index}
            onClick={animation}
            className='card flex-1 h-[70vmin] cursor-pointer overflow-hidden transition delay-700 ease-in-out'>
            <Image
              src={rock.src}
              alt="searock"
              width={500}
              height={500}
              className='block w-[100%] h-[100%] object-cover object-center'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;

//Comment
