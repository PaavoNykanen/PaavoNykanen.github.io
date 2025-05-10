import { FC } from 'react';
import { SkillIconData } from '../common/SkillIcon';
import mysqlSVG from '../../assets/skills/mysql.svg';
import dynamoSVG from '../../assets/skills/dynamo.svg';
import s3SVG from '../../assets/skills/s3.svg';
import SkillIcon from '../common/SkillIcon';
import { Flex, Row, Typography } from 'antd';

const DataSkills: FC = () => {
  const { Text } = Typography;
  const frontEndSkills: SkillIconData[] = [
    {
      src: mysqlSVG,
      alt: 'MySQL',
      tooltip: 'My experience with relation databases is mostly with MySQL. I have used it for storing data with a relational model, as well as modeled it with C# entity framework.',
    },
    {
      src: dynamoSVG,
      alt: 'DynamoDB',
      tooltip: 'DynamoDB gave me a lot of experience with NoSQL databases. I have used it for storing a lot of different types of data which was sometimes challenging without relations. Indexing and partitioning was also a bit tricky at first.',
    },
    {
      src: s3SVG,
      alt: 'S3',
      tooltip: 'Used S3 for storing JSON and HTML files and images.',
    },
  ];

  return (
    <Flex className="flex-col">
      <Text className="text-sm sm:text-md font-oswald">
        Data and storage
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

export default DataSkills;
