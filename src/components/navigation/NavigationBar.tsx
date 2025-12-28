import { Button, Drawer, Flex } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { ThemeButton } from '../../components/common/ThemeButton';
import { useState } from 'react';

const scrollToAnchor = (anchor: string) => {
  const element = document.getElementById(anchor);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const NavigationBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNavClick = (anchor: string) => {
    scrollToAnchor(anchor);
    setDrawerOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <Flex className="hidden md:flex sticky left-auto right-0 top-0 z-10 justify-end h-7">
        <ThemeButton text="About" className="mt-5 mr-3" onClick={() => scrollToAnchor('about')} />
        <ThemeButton text="Career" className="mt-5 mr-3" onClick={() => scrollToAnchor('career')} />
        <ThemeButton text="Skills" className="mt-5 mr-3" onClick={() => scrollToAnchor('skills')} />
        <ThemeButton text="Contact" className="mt-5 mr-5" onClick={() => scrollToAnchor('contact')} />
      </Flex>

      {/* Mobile Navigation */}
      <Flex className="md:hidden sticky left-auto right-0 top-0 z-10 justify-end h-7">
        <Button
          onClick={() => setDrawerOpen(true)}
          className="mt-5 mr-3 px-3 py-1.5 bg-white/30 backdrop-blur-md rounded-2xl border-2 border-white/50 hover:bg-white/40 hover:border-white/70 hover:shadow-lg active:bg-white/50 transition-all duration-200"
          aria-label="Open navigation menu"
        >
          <MenuOutlined className="text-base text-gray-800" />
        </Button>
      </Flex>

      <Drawer
        title={<span className="text-lg font-oswald text-gray-900 font-semibold">Navigation</span>}
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        width={250}
        styles={{
          header: {
            background: 'rgb(255, 140, 120)',
            borderBottom: 'none',
            paddingTop: '20px',
          },
          body: {
            background: 'rgb(255, 140, 120)',
            padding: '0 20px 20px 20px',
          },
        }}
      >
        <Flex vertical gap="middle">
          <ThemeButton text="About" className="w-full" onClick={() => handleNavClick('about')} />
          <ThemeButton text="Career" className="w-full" onClick={() => handleNavClick('career')} />
          <ThemeButton text="Skills" className="w-full" onClick={() => handleNavClick('skills')} />
          <ThemeButton text="Contact" className="w-full" onClick={() => handleNavClick('contact')} />
        </Flex>
      </Drawer>
    </>
  );
};

export default NavigationBar;
