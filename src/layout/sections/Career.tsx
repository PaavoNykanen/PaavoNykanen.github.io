import { Card, Flex, Typography } from 'antd';
import CareerCarousel from '../../components/carousel/CareerCarousel';

const { Text } = Typography;

const Career = () => (
  <Flex className="m-3 flex-col" id="career">
    <Text className="text-lg sm:text-xl font-oswald text-gray-900 drop-shadow-sm font-semibold">
      Career
    </Text>
    <Card className="m-2 md:m-10 bg-white/20 backdrop-blur-md border-white/30 shadow-xl">
      <CareerCarousel />
    </Card>
  </Flex>
);

export default Career;
