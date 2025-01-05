import { Flex, Typography } from 'antd';

const Skills = () => {
  const { Text } = Typography;

  return (
    <Flex vertical className='m-3 flex-col' id="skills">
      <Text className='text-lg md:text-md lg:text-lg xl:text-xl font-oswald mb-5'>
        My skill and experience
      </Text>
    </Flex>
  );
};

export default Skills;