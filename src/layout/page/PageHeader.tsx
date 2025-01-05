import { Typography, Flex } from 'antd';

const PageHeader = () => {
  const { Text } = Typography;
  return (
    <Flex vertical className='p-3'>
      <Text className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-oswald'>
        Paavo Nykänen
      </Text>
      <Text className='text-lg md:text-lg lg:text-xl xl:text-2xl font-oswald'>
        Software Developer
      </Text>
    </Flex>
  );
};

export default PageHeader;