import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HealthcareCaseStudy from './pages/HealthcareCaseStudy';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <HealthcareCaseStudy />
  </StrictMode>
);