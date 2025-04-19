import { Card, Flex, Row, Typography, Image } from 'antd';
import reactPNG from '../../assets/skills/react.png';

const Skills = () => {
  const { Text } = Typography;
  const webDev = [{
    src: reactPNG,
    alt: 'React',
    tooltip: 'Lots of experience with React, including creating different with libraries like AntDesign, MUI and ChakraUI, hooks, zustand store and context. Also used Jest to test React components.',
  }];

  return (
    <Flex vertical className="m-3 flex-col" id="skills">
      <Text className="text-lg sm:text-xl font-oswald mb-5">
        Skills and techonologies
      </Text>
      <Flex className="flex-col">
        <Card className="m-5 bg-orange-100 border-orange-200">
          <Flex className="flex-col">
            <Text className="text-sm sm:text-md font-oswald">
              Web Development
            </Text>
            <Text className="text-xs sm:text-sm font-lato">
              Hover icons to learn more!
            </Text>
            <Row>
              {webDev.map(icon => (
                <Image
                  key={icon.src}
                  className=""
                  preview={false}
                  src={icon.src}
                  alt={icon.alt}
                />
              ))}
            </Row>
          </Flex>
        </Card>
        <Card className="flex-col m-5 bg-orange-100 border-orange-200">
          <Flex className="flex-col">
            <Text className="text-sm sm:text-md font-oswald">
              Server-Side Development
            </Text>
            <Text className="text-xs sm:text-sm font-lato">
              Hover icons to learn more!
            </Text>
          </Flex>
        </Card>
        <Card className="flex-col m-5 bg-orange-100 border-orange-200">
          <Flex className="flex-col">
            <Text className="text-sm sm:text-md font-oswald">
              Cloud & DevOps
            </Text>
            <Text className="text-xs sm:text-sm font-lato">
              Hover icons to learn more!
            </Text>
          </Flex>
        </Card>
        <Card className="flex-col m-5 bg-orange-100 border-orange-200">
          <Flex className="flex-col">
            <Text className="text-sm sm:text-md font-oswald">
              Data and storage
            </Text>
            <Text className="text-xs sm:text-sm font-lato">
              Hover icons to learn more!
            </Text>
          </Flex>
        </Card>
        <Card className="flex-col m-5 bg-orange-100 border-orange-200">
          <Flex className="flex-col">
            <Text className="text-sm sm:text-md font-oswald">
              Languages
            </Text>
            <Text className="text-xs sm:text-sm font-lato">
              Hover icons to learn more!
            </Text>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
};

export default Skills;
