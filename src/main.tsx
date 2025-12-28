import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './routes/App.tsx';
import './index.css';
import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
import { HashRouter, Route, Routes } from 'react-router-dom';
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
        {/* Use hash router for github pages. Once hosting changes, switch to BrowserRouter */}
        <HashRouter>
          <Routes>
            <Route path="/sipsi-countdown" element={<SipsiCountdown />} />
            <Route path="/*" element={<App />} />
          </Routes>
        </HashRouter>
      </StyleProvider>
    </ConfigProvider>
  </StrictMode>,
);
