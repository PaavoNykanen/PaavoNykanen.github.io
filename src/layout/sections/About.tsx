import { Card, Flex, Typography } from 'antd';

const About = () => {
  const { Text } = Typography;
  const currentDate = new Date();
  const ageYears = currentDate.getMonth() < 2 && currentDate.getDate() < 13
    ? (currentDate.getFullYear() - 1999 - 1)
    : currentDate.getFullYear() - 1999;

  return (
    <Flex className="m-3" id="about">
      <Card className="w-full ml-10 mr-10 bg-orange-100 border-orange-200">
        <Flex className="m-3 flex-col md:flex-col lg:flex-row xl:flex-row">
          <Flex vertical className="ml-3">
            <Text className="text-sm md:text-md font-lato">
              Hi! I am Paavo, a
              {' '}
              {ageYears}
              {' '}
              year old software developer currently living in Jyväskylä, Finland.
              I graduated from the University of Jyväskylä with a Master of Science in Computer science in 2024.
              I also have a few years of work experience in the field of software development, mainly in full-stack
              development for client web applications and the dataplatform that they use. I am very eager to learn
              a lot more about software development and different technologies used for it, and I am always looking
              for new challenges and opportunities to improve my skills. You can read more about my journey so far
              below or get in contact with me through the contact section!
            </Text>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};

export default About;
