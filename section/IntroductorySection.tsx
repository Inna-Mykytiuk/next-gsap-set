import React from 'react';
import Image from 'next/image';
import plant from "/images/plant.png";
import girl from "/images/girl3.png";

const IntroductorySection = () => {
  return (
    <section className='bg-[#282828] w-full'>
      <div className='flex flex-col justify-center items-center min-h-screen relative overflow-hidden'>
        <h1 className='uppercase text-[8rem] text-white tracking-tight font-extralight absolute top-[10rem] z-40'>
          Wonderful Tattoo
        </h1>
        <Image src={plant} alt="plant" width={1920} height={500} className='absolute bottom-0 w-[1200px]' />
        <div className='w-[486px] h-[574px] bg-[#858480] rounded-t-full absolute bottom-0' />
        <Image src={girl} alt="plant" width={420} height={600} className='absolute bottom-[-20px] w-[420px]' />
      </div>
    </section>
  )
}

export default IntroductorySection
