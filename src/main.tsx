import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={{
      components: {
        Carousel: {
          arrowOffset: 0,
        },
      },
    }}
    >
      <StyleProvider layer>
        <App />
      </StyleProvider>
    </ConfigProvider>
  </StrictMode>,
);
