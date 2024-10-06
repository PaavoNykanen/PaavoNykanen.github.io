import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ConfigProvider } from 'antd';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        components: {
          Typography: {
            colorText: 'white',
            fontSize: 16,
            fontSizeHeading1: 30,
            fontSizeHeading2: 26,
            fontSizeHeading3: 22,
            fontSizeHeading4: 18,
            fontSizeHeading5: 16,
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
);
