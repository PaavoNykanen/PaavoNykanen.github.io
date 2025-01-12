import { Card, Flex, Typography } from 'antd';

const Skills = () => {
  const { Text } = Typography;

  return (
    <Flex vertical className='m-3 flex-col' id="skills">
      <Text className='text-lg sm:text-xl font-oswald mb-5'>
        Skills and experience
      </Text>
      <Card className='m-10 bg-orange-100 border-orange-200'>
        <>
          Under construction
        </>
      </Card>
    </Flex>
  );
};

export default Skills;