
import { Card, Flex, Typography } from 'antd';
import CareerCarousel from '../../components/carousel/CareerCarousel';

const { Text } = Typography;

const Career = () => {

  return (
    <Flex className='m-3 flex-col' id="career">
      <Text className='text-lg sm:text-xl font-oswald'>
        Career
      </Text>
      <Card className='m-10 bg-orange-100 border-orange-200'>
        <CareerCarousel />
      </Card>
    </Flex>
  );
};

export default Career;