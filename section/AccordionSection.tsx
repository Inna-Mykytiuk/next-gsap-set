import React from 'react';
import Accordion from '@/components/Accordion';


const AccordionSection = () => {
  return (
    <section className='bg-dark-gray bg-radial-gray w-full min-h-screen py-10 md:py-[100px]'>
      <div className='container'>
        <h1 className='uppercase text-4xl text-center md:text-[60px] font-agu xxl:text-[80px] text-gray-300  leading-[1] mb-[50px]'>Accordion</h1>
        <Accordion />
      </div>
    </section>
  )
}

export default AccordionSection
