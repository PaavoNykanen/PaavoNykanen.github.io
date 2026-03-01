import { Card, Flex, Typography } from 'antd';

const About = () => {
  const { Text } = Typography;

  return (
    <Flex className="m-3" id="about">
      <Card className="w-full ml-2 mr-2 md:ml-10 md:mr-10 bg-white/20 backdrop-blur-md border-white/30 shadow-xl">
        <Flex className="m-3 flex-col md:flex-col lg:flex-row xl:flex-row">
          <Flex vertical className="ml-3 space-y-3">
            <Text className="text-sm md:text-md font-lato text-gray-800">
              I&apos;m a software engineer with a Master&apos;s degree in Computer Science and
              a background in full-stack development, with a strong interest in cloud-native
              systems and modern application architecture.
            </Text>
            <Text className="text-sm md:text-md font-lato text-gray-800">
              I enjoy building reliable, scalable software — whether that means designing backend services, developing
              intuitive frontends, or working with distributed systems in the cloud.
            </Text>
            <Text className="text-sm md:text-md font-lato text-gray-800">
              Recently, I&apos;ve become increasingly interested in AI-powered tools and
              AI-assisted development workflows. I&apos;m fascinated by how intelligent
              systems can augment software engineering and open up entirely new ways of
              building and interacting with applications.
            </Text>
            <Text className="text-sm md:text-md font-lato text-gray-800">
              For me, software development is both a technical discipline and a creative craft — a balance between
              clean architecture, practical problem-solving, and continuous learning.
            </Text>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};

export default About;
