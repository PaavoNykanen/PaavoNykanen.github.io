import { Card, Flex, Modal, Typography } from 'antd';
import { type FC, useState } from 'react';
import type { CarouselInfoItem } from '../common/Carousel';
import { ThemeButton } from '../common/ThemeButton';

const { Title, Paragraph, Text } = Typography;

interface InfoTimelineProps {
  items: CarouselInfoItem[]
}

interface TimelineItemProps {
  item: CarouselInfoItem
  index: number
}

const TimelineRow: FC<TimelineItemProps> = ({ item, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasImage = Boolean(item.image && item.image.trim().length > 0);
  const imageFirst = index % 2 === 0;

  return (
    <Card
      className="w-full bg-white/40 backdrop-blur-sm border-white/50 shadow-md rounded-2xl overflow-hidden"
      styles={{ body: { padding: 0 } }}
    >
      <Flex
        className={`w-full flex-col ${imageFirst ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
      >
        <Flex
          align="center"
          justify="center"
          className="w-full lg:w-auto lg:flex-none lg:self-stretch overflow-hidden bg-white/25"
        >
          {hasImage
            ? (
              <img
                className="w-full h-56 sm:h-64 lg:h-full lg:max-h-72 lg:w-auto object-contain"
                src={`/assets/${item.image}`}
                alt={item.title}
              />
            )
            : (
              <Flex vertical align="center" justify="center" className="h-56 sm:h-64 lg:h-full lg:min-w-64 bg-white/40 px-4">
                <Text className="text-base sm:text-lg font-oswald text-gray-700 text-center">
                  Image coming soon
                </Text>
                <Text className="text-xs sm:text-sm font-lato text-gray-600 text-center mt-1">
                  {item.title}
                </Text>
              </Flex>
            )}
        </Flex>
        <Flex vertical className="w-full flex-1 p-4 md:p-5">
          <Title className="!text-base sm:!text-lg !font-oswald !p-0 !m-0 !pb-1 !text-gray-800">
            {item.title}
          </Title>
          <Title className="!text-sm sm:!text-base !font-oswald !p-0 !m-0 !pb-2 !text-gray-700">
            {item.subTitle}
          </Title>
          <Paragraph className="!text-sm sm:!text-base !font-lato !p-0 !m-0 !text-gray-800">
            {item.summary}
          </Paragraph>
          <ThemeButton
            variant="secondary"
            text="Read more"
            onClick={() => setIsModalOpen(true)}
            className="mt-3 w-28 text-sm"
          />
        </Flex>
      </Flex>
      <Modal
        title={<span className="text-md md:text-lg font-oswald text-gray-900 font-semibold">{item.title}</span>}
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
          {item.description}
        </Paragraph>
      </Modal>
    </Card>
  );
};

const InfoTimeline: FC<InfoTimelineProps> = ({ items }) => (
  <Flex vertical className="w-full gap-5 md:gap-7 p-1 md:p-3">
    {items.map((item, index) => (
      <div key={`${item.title}-${index}`} className="w-full max-w-5xl mx-auto">
        <TimelineRow item={item} index={index} />
      </div>
    ))}
  </Flex>
);

export default InfoTimeline;
