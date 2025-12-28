import { type CarouselProps, Carousel } from 'antd';
import type { CSSProperties, FC } from 'react';
import CarouselInfo from './CarouselInfo';

export interface CarouselInfoItem {
  title: string
  subTitle: string
  summary: string
  description: string
  image?: string
}

interface InfoCarouselProps extends CarouselProps {
  items: CarouselInfoItem[]
  style?: CSSProperties
}

const InfoCarousel: FC<InfoCarouselProps> = ({ items, style }) => (
  <Carousel
    arrows
    infinite={false}
    style={{
      padding: '10px 15px',
      ...style,
    }}
    className="md:!p-5 lg:!px-10"
  >
    {items.map(item => (
      <CarouselInfo
        key={item.title}
        title={item.title}
        subTitle={item.subTitle}
        summary={item.summary}
        description={item.description}
        image={item.image}
      />
    ))}
  </Carousel>
);

export default InfoCarousel;
