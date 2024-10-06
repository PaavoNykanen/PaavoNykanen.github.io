import { Slider, SliderSingleProps } from 'antd';

const CareerTimeline = () => {
  const items: SliderSingleProps['marks'] = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: '100',
  };
  return (
    <Slider marks={items} defaultValue={37} />
  );
};

export default CareerTimeline;