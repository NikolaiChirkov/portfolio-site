import { initModalState } from '../reducer/modalReducer';

export type TModalAction = {
  type: string;
  payload: IModalState;
};

export interface IModalProvProp {
  children: JSX.Element;
}

export interface IModalState {
  modalVisible?: boolean;
  data?: any;
}

export interface IModalContext {
  modalState: typeof initModalState;
  modalDispatch: (action: TModalAction) => void;
}
