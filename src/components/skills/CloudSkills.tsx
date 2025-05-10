import { FC } from 'react';
import { SkillIconData } from '../common/SkillIcon';
import awsSVG from '../../assets/skills/aws.svg';
import azureSVG from '../../assets/skills/azure.svg';
import dockerSVG from '../../assets/skills/docker.svg';
import kubernetesSVG from '../../assets/skills/kubernetes.svg';
import SkillIcon from '../common/SkillIcon';
import { Flex, Row, Typography } from 'antd';

const CloudSkills: FC = () => {
  const { Text } = Typography;
  const frontEndSkills: SkillIconData[] = [
    {
      src: awsSVG,
      alt: 'AWS',
      tooltip: 'Lots of experience with AWS at Akamon Innovations. I have used AWS for building and deploying serverless applications, rest-apis and web applications. I have used AWS Lambda, S3, DynamoDB, API Gateway, Cognito and CloudWatch. I also have some experience with AWS CDK components for building infrastructure as code and I also used it in my Master\'s thesis for adding error monitoring to applications.',
    },
    {
      src: azureSVG,
      alt: 'Azure',
      tooltip: 'Some experience with Azure from Akamon Innovations. I have used Azure Functions for deploying integrations projects and Application Insights for debugging issues.',
    },
    {
      src: dockerSVG,
      alt: 'Docker',
      tooltip: 'Got some experience with Docker from a couple of school projects for serving simple web applications with build docker images.',
    },
    {
      src: kubernetesSVG,
      alt: 'Kubernetes',
      tooltip: 'Also got some experience with Kubernetes from few school projects where it was used for deploying a web service from a docker image with better scalability and availability.',
    },
  ];

  return (
    <Flex className="flex-col">
      <Text className="text-sm sm:text-md font-oswald">
        Cloud & Docker
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

export default CloudSkills;
