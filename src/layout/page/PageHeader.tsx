import { Typography } from 'antd';
import { Header } from 'antd/es/layout/layout';

interface PageHeaderProps {
  title: string;
}

const PageHeader = ({
  title
}: PageHeaderProps) => {
  const { Title } = Typography;
  return (
    <Header style={{
      textAlign: 'left',
      backgroundColor: '#1E201E',
    }}>
      <Title level={3} style={{
        color: '#736e67',
        padding: '0',
        alignContent: 'center',
      }}>
        {title}
      </Title>
    </Header>
  );

};

export default PageHeader;