
import { Card, Flex, Typography } from 'antd';
import EducationCarousel from '../../components/carousel/EducationCarousel';

const { Text } = Typography;

const Education = () => {

  return (
    <Flex className='m-3 flex-col' id="education">
      <Text className='text-lg sm:text-xl font-oswald'>
        Education
      </Text>
      <Card className='m-10 bg-orange-100 border-orange-200'>
        <EducationCarousel />
      </Card>
    </Flex>
  );
};

export default Education;