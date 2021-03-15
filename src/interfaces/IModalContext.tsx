export type ModalAction = {
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
