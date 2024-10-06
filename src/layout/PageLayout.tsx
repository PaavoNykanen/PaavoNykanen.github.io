import { Layout } from 'antd';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';

const PageLayout = ({
  children
}: { children: React.ReactNode }) => {

  return (
    <Layout
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
      <PageHeader title={'Paavo\'s homepage'} />
      <Layout>
        {children}
      </Layout>
      <PageFooter />
    </Layout>
  );
};

export default PageLayout;