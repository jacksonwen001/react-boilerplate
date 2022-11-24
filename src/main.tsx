import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { worker } from '@/mock';
import { AuthProvider } from '@/auth/auth';

async function start() {
  if (import.meta.env.VITE_PROJECT_ENV === 'dev') {
    await worker.start({ onUnhandledRequest: 'bypass' });
  }
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>,
  );
}

start();
