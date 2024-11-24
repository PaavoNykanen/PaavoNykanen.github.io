import { Flex, Typography, Image } from 'antd';
import { FC } from 'react';

export interface CarouselInfoProps {
    title: string;
    subTitle: string;
    description: string;
    image?: string;
}

const CarouselInfo: FC<CarouselInfoProps> = ({ title, subTitle, description, image }) => {
  const { Title, Paragraph } = Typography;
  return (
    <Flex vertical>
      {image && image.length > 0 &&
        <Image src={'../../assets' + image} />
      }
      <Title style={{ margin: '0px' }} level={3}>{title}</Title>
      <Title style={{ margin: '0px', marginBottom: '10px' }} level={5}>{subTitle}</Title>
      <Paragraph>{description}</Paragraph>
    </Flex>
  );
};

export default CarouselInfo;