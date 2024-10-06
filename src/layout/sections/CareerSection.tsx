
import { Flex } from 'antd';
import HeaderDivider from '../../components/common/HeaderDivider';
import CareerCarousel from '../../components/carousel/CareerCarousel';

const CareerSection = () => {

  return (
    <Flex vertical style={{ margin: '10px' }}>
      <HeaderDivider title="My career" titleLevel={3} />
      <CareerCarousel />
    </Flex>
  );
};

export default CareerSection;