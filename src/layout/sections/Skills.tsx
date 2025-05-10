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
      <Text className="text-lg sm:text-xl font-oswald mb-5">
        Skills and techonologies
      </Text>
      <Flex className="flex flex-wrap gap-5 justify-center">
        <Card className="m-5 min-w-64 bg-orange-100 border-orange-200">
          <WebDevelopmentSkills />
        </Card>
        <Card className="m-5 min-w-64 bg-orange-100 border-orange-200">
          <ServerSideSkills />
        </Card>
        <Card className="m-5 min-w-64 bg-orange-100 border-orange-200">
          <CloudSkills />
        </Card>
        <Card className="m-5 min-w-64 bg-orange-100 border-orange-200">
          <DataSkills />
        </Card>
        <Card className="m-5 min-w-64 bg-orange-100 border-orange-200">
          <OtherSkills />
        </Card>
      </Flex>
    </Flex>
  );
};

export default Skills;
