import type { FC } from 'react';
import { Flex, Row, Typography } from 'antd';
import { type SkillIconData, default as SkillIcon } from '../common/SkillIcon';

const copilotSVG = '/assets/skills/copilot.svg';

const AISkills: FC = () => {
  const { Text } = Typography;

  const aiSkills: SkillIconData[] = [
    {
      src: copilotSVG,
      alt: 'GitHub Copilot',
      tooltip: 'Quite a good coding partner. Only quite recently started using it and I am really enjoying it. It helps me a lot with writing code faster and also helps me with learning new languages and frameworks. Also does help with creating unit tests and documentation.',
      level: 4,
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
