import { Card, Flex, Typography } from 'antd';
import WebDevelopmentSkills from '../../components/skills/WebDevelopmentSkills';
import ServerSideSkills from '../../components/skills/ServerSideSkills';
import CloudSkills from '../../components/skills/CloudSkills';
import DataSkills from '../../components/skills/DataSkills';
import OtherSkills from '../../components/skills/OtherSkills';

const Skills = () => {
  const { Text } = Typography;

  return (
    <Flex vertical className="m-3 flex-col" id="skills">
      <Text className="text-lg sm:text-xl font-oswald mb-5 text-gray-900 drop-shadow-sm font-semibold">
        Skills and techonologies
      </Text>
      <Flex className="flex flex-wrap gap-5 justify-center">
        <Card className="m-2 md:m-5 min-w-64 bg-white/20 backdrop-blur-md border-white/30 shadow-xl">
          <WebDevelopmentSkills />
        </Card>
        <Card className="m-2 md:m-5 min-w-64 bg-white/20 backdrop-blur-md border-white/30 shadow-xl">
          <ServerSideSkills />
        </Card>
        <Card className="m-2 md:m-5 min-w-64 bg-white/20 backdrop-blur-md border-white/30 shadow-xl">
          <CloudSkills />
        </Card>
        <Card className="m-2 md:m-5 min-w-64 bg-white/20 backdrop-blur-md border-white/30 shadow-xl">
          <DataSkills />
        </Card>
        <Card className="m-2 md:m-5 min-w-64 bg-white/20 backdrop-blur-md border-white/30 shadow-xl">
          <OtherSkills />
        </Card>
      </Flex>
    </Flex>
  );
};

export default Skills;
