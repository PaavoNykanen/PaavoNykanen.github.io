import InfoCarousel from '../common/Carousel';
import careerInfoJson from './info-items/career.json';

const CareerCarousel = () => {
  const careerInfo = careerInfoJson;

  return (
    <InfoCarousel
      items={careerInfo}
      arrows
      infinite={false}
    />
  );
};

export default CareerCarousel;
