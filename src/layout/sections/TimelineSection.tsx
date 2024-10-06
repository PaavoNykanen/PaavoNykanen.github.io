
import { Flex } from 'antd';
import HeaderDivider from '../../components/common/HeaderDivider';
import CareerTimeline from '../../components/timeline/CareerTimeline';

const TimelineSection = () => {

  return (
    <Flex vertical style={{ margin: '10px' }}>
      <HeaderDivider title="My timeline" titleLevel={3} />
      <CareerTimeline />
    </Flex>
  );
};

export default TimelineSection;