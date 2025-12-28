import { Flex } from 'antd';
import PageLayout from '../layout/page/PageLayout';
import Career from '../layout/sections/Career';
import Education from '../layout/sections/Education';
import About from '../layout/sections/About';
import Contact from '../layout/sections/Contact';
import Skills from '../layout/sections/Skills';

function App() {
  return (
    <PageLayout>
      <Flex vertical className="flex-grow text-sans space-y-10 mt-10">
        <About />
        {/* <Projects /> */}
        <Career />
        <Education />
        <Skills />
        <Contact />
        {/* <TimelineSection /> */}
      </Flex>
    </PageLayout>
  );
}

export default App;
