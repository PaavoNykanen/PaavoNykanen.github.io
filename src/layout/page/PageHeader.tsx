import { Typography, Flex } from 'antd';
import { ThemeButton } from '../../components/common/ThemeButton';

const PageHeader = () => {
  const { Text } = Typography;
  return (
    <Flex className="p-3">
      <Flex vertical>
        <Text className='text-3xl font-sans'>
          Paavo Nykänen
        </Text>
        <Text className='text-2xl'>
          Software Developer
        </Text>
      </Flex>
      <ThemeButton text="Contact me!" />
    </Flex>
  );
};

export default PageHeader;