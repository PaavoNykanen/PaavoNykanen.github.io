import { Flex } from 'antd';
import { ThemeButton } from '../../components/common/ThemeButton';

const scrollToAnchor = (anchor: string) => {
  const element = document.getElementById(anchor);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const NavigationBar = () => (
  <Flex className="sticky left-auto right-0 top-0 z-10 justify-end h-7">
    <ThemeButton text="About" className="mt-5 mr-3" onClick={() => scrollToAnchor('about')} />
    <ThemeButton text="Career" className="mt-5 mr-3" onClick={() => scrollToAnchor('career')} />
    <ThemeButton text="Skills" className="mt-5 mr-3" onClick={() => scrollToAnchor('skills')} />
    <ThemeButton text="Contact" className="mt-5 mr-5" onClick={() => scrollToAnchor('contact')} />
  </Flex>
);

export default NavigationBar;
