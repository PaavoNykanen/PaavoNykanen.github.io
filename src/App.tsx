import { Flex } from 'antd';
import PageLayout from './layout/PageLayout';
import PersonalInfo from './components/PersonalInfo';
import Headshot from './components/Headshot';

function App() {
  return (
    <PageLayout>
      <Flex style={{ height: '100vh', alignItems: 'center', justifyContent: 'center', backgroundColor: '#3C3D37' }}>
        <Flex style={{ margin: '10px' }}>
          <Headshot />
          <PersonalInfo />
        </Flex>
      </Flex>
    </PageLayout>
  );
}

export default App;
