import { Flex } from 'antd';
import PageLayout from './layout/PageLayout';
import PersonalInfoSection from './components/personalInfo/PersonalnfoSection';

function App() {
  return (
    <PageLayout>
      <Flex style={{ height: '100vh', backgroundColor: '#3C3D37' }}>
        <PersonalInfoSection />
      </Flex>
    </PageLayout>
  );
}

export default App;
