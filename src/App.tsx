import { Flex } from 'antd';
import PageLayout from './layout/page/PageLayout';
// import PersonalInfoSection from './layout/sections/PersonalnfoSection';
import CareerSection from './layout/sections/CareerSection';
import EducationSection from './layout/sections/EducationSection';

function App() {
  return (
    <PageLayout>
      <Flex vertical className="flex-grow text-sans">
        {/* <PersonalInfoSection /> */}
        <CareerSection />
        <EducationSection />
        {/* <TimelineSection /> */}
      </Flex>
    </PageLayout>
  );
}

export default App;
