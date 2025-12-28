import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './routes/App.tsx';
import './index.css';
import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SipsiCountdown from './routes/SipsiCountdown.tsx';

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
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<App />} />
            <Route path="/sipsi-countdown" element={<SipsiCountdown />} />
          </Routes>
        </BrowserRouter>
      </StyleProvider>
    </ConfigProvider>
  </StrictMode>,
);
