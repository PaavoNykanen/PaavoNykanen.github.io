import type { FC } from 'react';
import { Flex, Row, Typography } from 'antd';
import { type SkillIconData, default as SkillIcon } from '../common/SkillIcon';

const copilotSVG = '/assets/skills/copilot.svg';
const kiroSVG = '/assets/skills/kiro.svg';
const claudeSVG = '/assets/skills/claude.svg';

const AISkills: FC = () => {
  const { Text } = Typography;

  const aiSkills: SkillIconData[] = [
    {
      src: copilotSVG,
      alt: 'GitHub Copilot',
      tooltip: 'Quite a good coding partner. Used a lot of its code completion, chat and code generation features. I have used it for debugging, testing, refactoring and creating new features. It has also been used in creating this website.',
      level: 4,
    },
    {
      src: kiroSVG,
      alt: 'AWS Kiro',
      tooltip: 'I have used Kiro a lot in spec and vibe mode as a coding assistant in my work projects. Very good experiences with making small fixes, tracking down bugs, creating entire new features and automating test generation. Works really well with things like Github MCP and other tools.',
      level: 3,
    },
    {
      src: claudeSVG,
      alt: 'Claude',
      tooltip: 'I have used Claude chat mainly for coding assistance, code review and evaluation and as a general chat assistant. It has been a good tool for optimizing code and helping with making design decisions. ',
      level: 3,
    },
  ];

  return (
    <Flex className="flex-col">
      <Text className="text-sm sm:text-md font-oswald">
        AI & coding assistants
      </Text>
      <Text className="text-xs sm:text-sm font-lato">
        Hover icons to learn more!
      </Text>
      <Row>
        {aiSkills.map(icon => (
          <SkillIcon
            key={icon.src}
            iconData={icon}
          />
        ))}
      </Row>
    </Flex>
  );
};

export default AISkills;
