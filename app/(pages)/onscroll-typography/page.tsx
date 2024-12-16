import React from 'react'
import ScrollTypography from '@/components/ScrollTypography';
import SmoothScrollWrapper from '@/components/SmoothScrollWrapper';

const OnscrollTypographyPage = () => {
  return (
    <SmoothScrollWrapper>
      <main className='main font-audiowide'>
        <ScrollTypography />
      </main>
    </SmoothScrollWrapper>
  )
}

export default OnscrollTypographyPage;
