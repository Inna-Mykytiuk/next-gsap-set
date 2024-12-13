import SmoothScrollWrapper from '@/components/SmoothScrollWrapper';
import IntroductorySection from '@/section/IntroductorySection';
import ModelSection from '@/section/ModelSection';

const IntroductoryPage = () => {
  return (
    <SmoothScrollWrapper>
      <IntroductorySection />
      <ModelSection />
    </SmoothScrollWrapper>
  )
}

export default IntroductoryPage;
