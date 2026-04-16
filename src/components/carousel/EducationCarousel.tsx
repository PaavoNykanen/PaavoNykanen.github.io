import InfoCarousel from '../common/Carousel';
import educationInfoJson from '../../content/education.json';

const EducationCarousel = () => {
  const educationInfo = educationInfoJson;

  return (
    <InfoCarousel
      items={educationInfo}
      arrows
      infinite
    />
  );
};

export default EducationCarousel;
