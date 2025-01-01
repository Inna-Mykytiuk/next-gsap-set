import React from 'react'
import Image from 'next/image'

type Props = {
  id: number;
  src: string;
  alt: string;
}


const Slide = ({ id, src, alt }: Props) => {
  return (
    <div className="slide w-full [grid-area:1_/1_/-1_/-1] pointer-events-none opacity-1 overflow-hidden relative grid place-items-center">
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
  )
}

export default Slide
