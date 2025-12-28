import type { FC } from 'react';
import { type SkillIconData, default as SkillIcon } from '../common/SkillIcon';
import { Flex, Row, Typography } from 'antd';

const arduinoSVG = '/assets/skills/arduino.svg';
const githubSVG = '/assets/skills/github.svg';
const copilotSVG = '/assets/skills/copilot.svg';
const azureDevopsSVG = '/assets/skills/azure-devops.svg';

const OtherSkills: FC = () => {
  const { Text } = Typography;
  const frontEndSkills: SkillIconData[] = [
    {
      src: arduinoSVG,
      alt: 'Arduino',
      tooltip: 'Tried a bit of Arduino development for a few school projects. One project included an Arduino board with a temperature sensor and proximity sensor and uploading that data to a cloud storage.',
    },
    {
      src: githubSVG,
      alt: 'Github',
      tooltip: 'My most used tool for version control. I have used it for all of my projects and I am very familiar with the Git flow, Github actions and also have some experience with versioned Github package releases.',
    },
    {
      src: copilotSVG,
      alt: 'Github Copilot',
      tooltip: 'Quite a good coding partner. Only quite recently started using it and I am really enjoying it. It helps me a lot with writing code faster and also helps me with learning new languages and frameworks. Also does help with creating unit tests and documentation.',
    },
    {
      src: azureDevopsSVG,
      alt: 'Azure DevOps',
      tooltip: 'DevOps tools used at Akamon Innovations. I have used it for managing work items and tasks for an agile project workflow.',
    },
  ];

  return (
    <Flex className="flex-col">
      <Text className="text-sm sm:text-md font-oswald">
        IoT, version control and other skills and tools
      </Text>
      <Text className="text-xs sm:text-sm font-lato">
        Hover icons to learn more!
      </Text>
      <Row>
        {frontEndSkills.map(icon => (
          <SkillIcon
            key={icon.src}
            iconData={icon}
          />
        ))}
      </Row>
    </Flex>
  );
};

export default OtherSkills;
