import { useReducer, useContext, createContext } from 'react';
import { ModalAction, IModalProvProp } from '../interfaces/IModalContext';
import { initModalState, modalReducer } from '../reducer/modalReducer';

export const ModalContext = createContext<{
  modalState: typeof initModalState;
  // eslint-disable-next-line func-call-spacing
  modalDispatch: (action: ModalAction) => void;
}>({
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

export const useModalContext = (): any => useContext(ModalContext);
