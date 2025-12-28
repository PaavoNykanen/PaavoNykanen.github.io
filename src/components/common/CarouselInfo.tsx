import { Flex, Typography, Image, Modal, Button } from 'antd';
import { type FC, useState } from 'react';
import { ThemeButton } from './ThemeButton';

export interface CarouselInfoProps {
  title: string
  subTitle: string
  summary: string
  description: string
  image?: string
}

const CarouselInfo: FC<CarouselInfoProps> = ({
  title,
  subTitle,
  summary,
  description,
  image,
}) => {
  const { Title, Paragraph } = Typography;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Flex vertical>
      <Title
        className="text-md sm:text-lg font-oswald p-0 m-0 pb-1"
      >
        {title}
      </Title>
      <Title
        className="text-sm sm:text-md font-oswald p-0 m-0 pb-2"
      >
        {subTitle}
      </Title>
      <Flex className="flex-col xl:flex-row">
        {image && image.length > 0
          && (
            <Flex className="mr-4 h-72 max-w-full min-w-72">
              <Image
                className="h-full max-w-full object-contain"
                preview={false}
                src={`src/assets/${image}`}
              />
            </Flex>
          )}
        <Paragraph
          className="text-sm sm:text-md font-lato p-0 m-0"
        >
          {summary}
        </Paragraph>
      </Flex>
      <ThemeButton variant="secondary" text="Read more" onClick={() => setIsModalOpen(true)} className="mt-5 w-28" />
      <Modal
        title={title}
        open={isModalOpen}
        footer={
          <Button onClick={() => setIsModalOpen(false)}>Close</Button>
        }
        onCancel={() => setIsModalOpen(false)}
      >
        <Paragraph className="text-sm font-lato p-0 m-0">
          {description}
        </Paragraph>
      </Modal>
    </Flex>
  );
};

export default CarouselInfo;
