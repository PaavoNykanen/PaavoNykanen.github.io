import { Flex, Typography, Modal } from 'antd';
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
        className="text-md sm:text-lg font-oswald p-0 m-0 pb-1 text-gray-800"
      >
        {title}
      </Title>
      <Title
        className="text-sm sm:text-md font-oswald p-0 m-0 pb-2 text-gray-700"
      >
        {subTitle}
      </Title>
      <Flex className="flex-col xl:flex-row gap-2 md:gap-4">
        {image && image.length > 0
          && (
            <Flex className="flex-shrink-0">
              <img
                className="h-40 md:h-56 lg:h-64 w-auto max-w-full object-cover rounded-xl shadow-md"
                src={`src/assets/${image}`}
                alt={title}
              />
            </Flex>
          )}
        <Paragraph
          className="text-sm sm:text-md font-lato p-0 m-0 text-gray-800 break-words"
        >
          {summary}
        </Paragraph>
      </Flex>
      <ThemeButton variant="secondary" text="Read more" onClick={() => setIsModalOpen(true)} className="mt-3 md:mt-5 w-24 md:w-28 text-sm" />
      <Modal
        title={<span className="text-md md:text-lg font-oswald text-gray-900 font-semibold">{title}</span>}
        open={isModalOpen}
        footer={(
          <Flex justify="end" className="pt-4">
            <ThemeButton text="Close" onClick={() => setIsModalOpen(false)} variant="secondary" />
          </Flex>
        )}
        onCancel={() => setIsModalOpen(false)}
        styles={{
          header: {
            background: 'linear-gradient(135deg, rgba(255, 245, 240, 0.98), rgba(255, 235, 230, 0.98))',
          },
          content: {
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
            background: 'linear-gradient(135deg, rgba(255, 245, 240, 0.98), rgba(255, 235, 230, 0.98))',
          },
        }}
      >
        <Paragraph className="text-sm md:text-md font-lato leading-relaxed text-gray-800 whitespace-pre-line">
          {description}
        </Paragraph>
      </Modal>
    </Flex>
  );
};

export default CarouselInfo;
