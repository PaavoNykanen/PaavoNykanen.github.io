import { Layout } from 'antd';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import NavigationBar from '../../components/navigation/NavigationBar';

const PageLayout = ({
  children
}: { children: React.ReactNode }) => {
  return (
    <Layout className="min-h-screen flex flex-col bg-gradient-to-br from-yellow-300 to-pink-500">
      <NavigationBar />
      <PageHeader/>
      {children}
      <PageFooter />
    </Layout>
  );
};

export default PageLayout;