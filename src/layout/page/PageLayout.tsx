import { Layout } from 'antd';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import NavigationBar from '../../components/navigation/NavigationBar';
import { ReactNode } from 'react';

const PageLayout = ({
  children,
}: { children: ReactNode }) => {
  return (
    <Layout className="pl-10 pr-10 pt-5 pb-5 min-h-screen flex flex-col bg-gradient-to-br from-yellow-300 to-pink-500">
      <NavigationBar />
      <PageHeader />
      {children}
      <PageFooter />
    </Layout>
  );
};

export default PageLayout;
