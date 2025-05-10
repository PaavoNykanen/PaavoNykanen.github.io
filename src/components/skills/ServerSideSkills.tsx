import { FC } from 'react';
import { SkillIconData } from '../common/SkillIcon';
import csharpSVG from '../../assets/skills/csharp.svg';
import javaSVG from '../../assets/skills/java.svg';
import pythonSVG from '../../assets/skills/python.svg';
import typescriptSVG from '../../assets/skills/typescript.svg';
import graphqlSVG from '../../assets/skills/graphql.svg';
import SkillIcon from '../common/SkillIcon';
import { Flex, Row, Typography } from 'antd';

const ServerSideSkills: FC = () => {
  const { Text } = Typography;
  const frontEndSkills: SkillIconData[] = [
    {
      src: csharpSVG,
      alt: 'C#',
      tooltip: 'Have used C# at Akamon Innovations and for a few school projects. Mostly used it for building server side projects, rest-apis and integrations projects. Some experience with dotnet and entity frameworks.',
    },
    {
      src: javaSVG,
      alt: 'Java',
      tooltip: 'Mostly used Java for school projects. Some experience with Java Springboot for building rest-apis as well as a jar cookbook desktop application that you can find in my Github.',
    },
    {
      src: pythonSVG,
      alt: 'Python',
      tooltip: 'I have some experience with Python from building and running scripts for data migrations and analysis as well as using it in some schoolwork. I have also used it for building a simple rest-api with Flask. Also used it quite a bit for some AI and machine learning courses at school.',
    },
    {
      src: typescriptSVG,
      alt: 'Typescript',
      tooltip: 'On top of using Typescript for front end development, I have also used it for building server side services with Node.js.',
    },
    {
      src: graphqlSVG,
      alt: 'GraphQL',
      tooltip: 'On top of having experience with normal REST-APIs, at Akamon Innovations I have also used GraphQL for building an internal API for multiple web applications.',
    },
  ];

  return (
    <Flex className="flex-col">
      <Text className="text-sm sm:text-md font-oswald">
        Server-Side Development
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

export default ServerSideSkills;
