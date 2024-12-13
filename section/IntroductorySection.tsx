import React from 'react';
import IntroductoryHero from '@/components/IntroductoryHero';


const IntroductorySection = () => {
  return (
    <section className='bg-dark-gray bg-radial-gray w-full'>
      <div className='container'>
        <IntroductoryHero />
      </div>
    </section>
  )
}

export default IntroductorySection
