import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ModalProvider } from './context/ModalContext';
import './index.scss';

ReactDOM.render(
  <StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </StrictMode>,
  document.getElementById('root')
);
