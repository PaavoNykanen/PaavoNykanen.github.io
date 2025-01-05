
import { Flex, Typography } from 'antd';
import Headshot from '../../components/personal-info/Headshot';

const About = () => {
  const { Text } = Typography;

  return (
    <Flex className='m-3'>
      <Headshot />
      <Flex vertical>
        <Text className='text-lg font-lato'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text className='text-lg font-lato'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text className='text-lg font-lato'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text className='text-lg font-lato'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text className='text-lg font-lato'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text className='text-lg font-lato'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </Flex>
    </Flex>
  );
};

export default About;