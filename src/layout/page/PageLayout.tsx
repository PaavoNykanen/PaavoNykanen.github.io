import { Layout } from 'antd';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import NavigationBar from '../../components/navigation/NavigationBar';
import type { ReactNode } from 'react';

const PageLayout = ({
  children,
}: { children: ReactNode }) => (
  <Layout className="px-2 py-3 md:px-10 md:py-5 min-h-screen flex flex-col bg-gradient-to-br from-yellow-300 to-pink-500">
    <NavigationBar />
    <PageHeader />
    {children}
    <PageFooter />
  </Layout>
);

export default PageLayout;
