import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';
import { hideModal } from '../reducer/reducerShortcut';
import Header from './Header/Header';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import ProjectModal from './ProjectModal/ProjectModal';
import '../resources/scss/reset.scss';
import './App.scss';

const App = (): JSX.Element => {
  const { modalState, modalDispatch } = useContext(ModalContext);

  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
      modalDispatch(hideModal);
    }
  });

  return (
    <div className="app">
      <Header />
      <main className="page">
        <Home />
      </main>
      <Footer />
      {modalState.modalVisible && <ProjectModal />}
    </div>
  );
};

export default App;
