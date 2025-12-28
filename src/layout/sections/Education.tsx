import { Card, Flex, Typography } from 'antd';
import EducationCarousel from '../../components/carousel/EducationCarousel';

const { Text } = Typography;

const Education = () => (
  <Flex className="m-3 flex-col" id="education">
    <Text className="text-lg sm:text-xl font-oswald text-gray-900 drop-shadow-sm font-semibold">
      Education
    </Text>
    <Card className="m-2 md:m-10 bg-white/20 backdrop-blur-md border-white/30 shadow-xl">
      <EducationCarousel />
    </Card>
  </Flex>
);

export default Education;
