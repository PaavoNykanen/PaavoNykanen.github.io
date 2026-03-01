import { Typography, Flex } from 'antd';

const PageHeader = () => {
  const { Text } = Typography;
  return (
    <Flex vertical className="p-3">
      <Text className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-oswald">
        Paavo Nykänen
      </Text>
      <Text className="text-lg sm:text-xl lg:text-2xl font-oswald">
        Software Engineer
      </Text>
      <Text className="text-md sm:text-lg lg:text-xl font-oswald">
        focused on cloud-native systems and AI-powered development
      </Text>
    </Flex>
  );
};

export default PageHeader;
