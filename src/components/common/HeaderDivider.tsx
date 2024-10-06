import { Divider, DividerProps, Typography } from 'antd';
import { FC } from 'react';

interface DividerHeaderProps extends DividerProps {
    title: string;
    titleLevel: 1 | 5 | 2 | 3 | 4 | undefined;
}

const HeaderDivider: FC<DividerHeaderProps> = ({
  title,
  titleLevel
}) => {
  const { Title } = Typography;
  return (
    <Divider
      orientation="left"
      style={{
        borderColor: '#1E201E',
        margin: '0',
        padding: '0',
      }}
    >
      <Title level={titleLevel}>{title}</Title>
    </Divider>
  );
};

export default HeaderDivider;