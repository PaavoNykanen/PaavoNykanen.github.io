
import { Flex } from 'antd';
import HeaderDivider from '../../components/common/HeaderDivider';
import EducationCarousel from '../../components/carousel/EducationCarousel';

const EducationSection = () => {

  return (
    <Flex vertical style={{ margin: '10px' }}>
      <HeaderDivider title="Education" titleLevel={3} />
      <EducationCarousel />
    </Flex>
  );
};

export default EducationSection;