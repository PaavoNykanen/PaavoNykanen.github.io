import InfoCarousel, { type CarouselInfoItem } from '../common/Carousel';
import careerInfoJson from '../../content/career.json';

const CareerCarousel = () => {
  const careerInfo: CarouselInfoItem[] = careerInfoJson.flatMap(company => (
    company.positions.map(position => ({
      ...position,
      title: `${position.title} - ${company.company}`,
    }))
  ));

  return (
    <InfoCarousel
      items={careerInfo}
      arrows
      infinite={false}
    />
  );
};

export default CareerCarousel;
