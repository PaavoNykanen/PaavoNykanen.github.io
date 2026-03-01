import { Card, Flex, Typography } from 'antd';

const About = () => {
  const { Text } = Typography;

  return (
    <Flex className="m-3" id="about">
      <Card className="w-4/5 mx-auto bg-white/20 backdrop-blur-md border-white/30 shadow-xl">
        <Flex className="m-3 flex-col md:flex-col lg:flex-row xl:flex-row">
          <Flex vertical className="ml-3 space-y-3">
            <Text className="text-sm md:text-md font-lato text-gray-800">
              I&apos;m a software engineer with a Master&apos;s degree in Computer Science and
              a background in full-stack development, with a strong interest in cloud-native
              systems and modern application architecture.
            </Text>
            <Text className="text-sm md:text-md font-lato text-gray-800">
              I enjoy solving complex problems and building reliable, scalable software
              from backend services to user-facing applications
              and designing and working with distributed systems in the cloud.
            </Text>
            <Text className="text-sm md:text-md font-lato text-gray-800">
              Recently, I’ve been exploring AI-powered tools and AI-assisted development
              workflows, and I’m excited about how they’re reshaping the way we build software.
            </Text>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};

export default About;
