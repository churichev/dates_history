import { App } from './app/App';
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');

if (!root) {
    throw new Error('');
}

createRoot(root).render(<App />);
