import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/global.css';
import './styles/containment.css';
import './styles/together-poster.css';

const root = document.getElementById('root');
if (!root) {
  throw new Error('Root element #root is missing');
}

createRoot(root).render(<App />);
