import { Card, Flex, Typography } from 'antd';
import careerInfoJson from '../../content/career.json';
import CareerCompanyTimeline, { type CareerCompanyItem } from '../../components/timeline/CareerCompanyTimeline';

const { Text } = Typography;

const Career = () => (
  <Flex className="m-3 flex-col" id="career">
    <Text className="text-lg sm:text-xl font-oswald text-gray-900 drop-shadow-sm font-semibold">
      Career
    </Text>
    <Card className="m-2 md:m-10 bg-white/20 backdrop-blur-md border-white/30 shadow-xl">
      <CareerCompanyTimeline companies={careerInfoJson as CareerCompanyItem[]} />
    </Card>
  </Flex>
);

export default Career;
