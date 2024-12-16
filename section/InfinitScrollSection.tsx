import React from 'react';
import InfinitScroll from '@/components/InfinitScroll';

const InfinitScrollSection = () => {
  return (
    <section className='bg-dark-gray bg-radial-gray w-full'>
      <div className='container'>
        <InfinitScroll />
      </div>
    </section>
  )
}

export default InfinitScrollSection
