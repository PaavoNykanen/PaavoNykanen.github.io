import { Carousel, CarouselProps } from 'antd';
import { FC } from 'react';
import CarouselInfo from './CarouselInfo';

export interface CarouselInfoItem {
    title: string;
    subTitle: string;
    description: string;
}

interface InfoCarouselProps extends CarouselProps {
  items: CarouselInfoItem[];
  style?: React.CSSProperties;
}

const InfoCarousel: FC<InfoCarouselProps> = ({items, style}) => {
  return (
    <Carousel
      style={{
        ...style,
        marginRight: '20px',
        marginLeft: '20px',
        paddingRight: '50px',
        paddingLeft: '50px',
        paddingBottom: '20px'
      }}
      arrows
      infinite={false}>
      {items.map((item) => (
        <CarouselInfo
          title={item.title}
          subTitle={item.subTitle}
          description={item.description}
        />
      ))}
    </Carousel>
  );
};

export default InfoCarousel;