import { FC } from 'react';
import { SkillIconData } from '../common/SkillIcon';
import reactSVG from '../../assets/skills/react.svg';
import cssSVG from '../../assets/skills/css-3.svg';
import htmlSVG from '../../assets/skills/html-5.svg';
import javascriptSVG from '../../assets/skills/javascript.svg';
import tailwindSVG from '../../assets/skills/tailwind.svg';
import typescriptSVG from '../../assets/skills/typescript.svg';
import viteSVG from '../../assets/skills/vite.svg';
import SkillIcon from '../../components/common/SkillIcon';
import { Flex, Row, Typography } from 'antd';

const WebDevelopmentSkills: FC = () => {
  const { Text } = Typography;
  const frontEndSkills: SkillIconData[] = [{
    src: reactSVG,
    alt: 'React',
    tooltip: 'Lots of experience with React building web applications with multiple different component libraries like Material UI, Chakra UI and Ant Desing. Good knowledge about state management, hooks, zustand store and context. Also used Jest to test React components.',
  }, {
    src: typescriptSVG,
    alt: 'Typescript',
    tooltip: 'Mostly used Typescript in all of my front end development. Really enjoying stricter typing and type safety compared to Javascript.',
  }, {
    src: javascriptSVG,
    alt: 'Javascript',
    tooltip: 'Have done some smaller school projects with Javascript.',
  }, {
    src: tailwindSVG,
    alt: 'Tailwind',
    tooltip: 'Trying out Tailwind css for the first time in this web page project and so far I enjoy how easy it is to use.',
  }, {
    src: viteSVG,
    alt: 'Vite',
    tooltip: 'After my first react app was built with CRA, I decided to switch to Vite. The build time is a lot faster.',
  }, {
    src: htmlSVG,
    alt: 'HTML',
    tooltip: 'Of course I did my first web pages with plain HTML. Already moved on to other things but it\'s important to know the basics and the base of building web applications.',
  }, {
    src: cssSVG,
    alt: 'CSS',
    tooltip: 'Some simple styling done with plain CSS for my first web projects. Mostly using component library provided styling or Tailwind for styles at this moment though.',
  }];

  return (
    <Flex className="flex-col">
      <Text className="text-sm sm:text-md font-oswald">
        Web Development
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

export default WebDevelopmentSkills;
