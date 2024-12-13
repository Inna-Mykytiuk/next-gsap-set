import React from 'react';
import Image from 'next/image';

const IntroductoryHero = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen relative overflow-hidden'>
      <h1 className='uppercase text-[6rem] md:text-[8rem] font-agu xxl:text-[10rem] text-white absolute top-[10rem] z-20'>
        Wonderful Tattoo
      </h1>
      <div className='w-[500px] h-[620px] xxl:w-[700px] xxl:h-[820px] bg-[#858480] rounded-t-full absolute bottom-0 z-10' />
      <Image src="/images/plant.png" alt="plant" width={1440} height={500} className='absolute bottom-0 w-[1200px] z-0 xxl:w-[1440px]' />
      <Image src="/images/girl5.png" alt="plant" width={560} height={640} className='absolute bottom-[-20px] w-[420px] z-20 xxl:w-[560px]' />
    </div>
  )
}

export default IntroductoryHero
