import { Flex, Typography } from 'antd';
import { FC } from 'react';

export interface CarouselInfoProps {
    title: string;
    subTitle: string;
    description: string;
}

const CarouselInfo: FC<CarouselInfoProps> = ({ title, subTitle, description }) => {
  const { Title, Paragraph } = Typography;
  return (
    <Flex vertical>
      <Title style={{ margin: '0px' }} level={3}>{title}</Title>
      <Title style={{ margin: '0px', marginBottom: '10px' }} level={5}>{subTitle}</Title>
      <Paragraph>{description}</Paragraph>
    </Flex>
  );
};

export default CarouselInfo;