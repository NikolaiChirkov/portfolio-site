import { Dispatch } from 'react';
import { initModalState } from '../reducer/modalReducer';

export interface IModalProvProp {
  children: JSX.Element;
}

export interface IModalContext {
  modalState: typeof initModalState;
  modalDispatch: Dispatch<TModalAction>;
}

export type TModalAction = {
  type: string;
  payload: IModalState;
};

export interface IModalState {
  modalVisible?: boolean;
  data?: {
    modal?: modalEntity;
  };
}

export type modalEntity = {
  img: string;
  name: string;
  type: string;
  stack: string;
  linkHref: string;
  linkName: string;
  description: string;
};
