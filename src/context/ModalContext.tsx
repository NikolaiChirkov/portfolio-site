import { useReducer, useContext, createContext } from 'react';
import { IModalProvProp, IModalContext } from '../interfaces/IModalContext';
import { initModalState, modalReducer } from '../reducer/modalReducer';

export const ModalContext = createContext<IModalContext>({
  modalState: initModalState,
  modalDispatch: () => {},
});

export const ModalProvider = ({ children }: IModalProvProp): JSX.Element => {
  const [modalState, modalDispatch] = useReducer(modalReducer, initModalState);

  return (
    <ModalContext.Provider value={{ modalState, modalDispatch }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = (): IModalContext => useContext(ModalContext);
