import { Card, Flex, Typography } from 'antd';
import type { FC } from 'react';
import type { CarouselInfoItem } from '../common/Carousel';
import InfoTimeline from './InfoTimeline';

const { Title, Text } = Typography;

export interface CareerCompanyItem {
  company: string
  start: string
  end: string
  positions: CarouselInfoItem[]
}

interface CareerCompanyTimelineProps {
  companies: CareerCompanyItem[]
}

const CareerCompanyTimeline: FC<CareerCompanyTimelineProps> = ({ companies }) => (
  <Flex vertical className="gap-6 md:gap-8">
    {companies.map(company => (
      <Card
        key={`${company.company}-${company.start}`}
        className="bg-white/20 backdrop-blur-sm border-white/40 shadow-lg rounded-2xl"
      >
        <Flex vertical className="gap-1 px-1">
          <Title className="!text-lg sm:!text-xl !font-oswald !mb-0 !text-gray-900">
            {company.company}
          </Title>
          <Text className="text-sm sm:text-base font-lato text-gray-700">
            {company.start}
            {' - '}
            {company.end}
          </Text>
        </Flex>
        <InfoTimeline items={company.positions} />
      </Card>
    ))}
  </Flex>
);

export default CareerCompanyTimeline;
