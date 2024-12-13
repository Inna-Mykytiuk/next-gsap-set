import React from 'react';
import Image from 'next/image';

const ModelSection = () => {
  return (
    <section className='min-h-screen bg-[#282828] w-full relative z-50 py-10 md:py-[100px]'>
      <div className='container'>
        <h2 className=' text-3xl md:text-5xl text-gray-300 text-center fornt-bold mb-[60px]'>Lorem, ipsum dolor sit amet consectetur.</h2>
        <div className='flex flex-col xl:flex-row justify-center gap-8'>
          <div className='flex flex-col gap-4 text-gray-300 text-base w-full max-w-full xl:max-w-[600px]'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, perferendis culpa nam dolorum fugiat consectetur ex provident amet eaque error explicabo voluptas alias necessitatibus nihil cupiditate temporibus quam quae sequi facere ratione cumque adipisci expedita ad minima. Amet, iste facilis.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, perferendis culpa nam dolorum fugiat consectetur ex provident amet eaque error explicabo voluptas alias necessitatibus nihil cupiditate temporibus quam quae sequi facere ratione cumque adipisci expedita ad minima. Amet, iste facilis.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, perferendis culpa nam dolorum fugiat consectetur ex provident amet eaque error explicabo voluptas alias necessitatibus nihil cupiditate temporibus quam quae sequi facere ratione cumque adipisci expedita ad minima. Amet, iste facilis.</p>
          </div>

          <div className='flex-1 max-w-full xl:max-w-[400px] mx-auto xl:mx-0'>
            <Image
              src="/images/model.jpg" alt="plant" width={460} height={640} className='block w-auto h-auto object-cover object-center' />
          </div>

        </div>
      </div>
    </section>
  )
}

export default ModelSection
