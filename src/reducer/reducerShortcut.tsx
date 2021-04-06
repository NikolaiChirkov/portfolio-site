import { TModalAction } from '../interfaces/IModalContext';

export const hideModal: TModalAction = {
  type: 'CHANGE_MODALVISIBLE',
  payload: { modalVisible: false },
};

export const showModal: TModalAction = {
  type: 'CHANGE_MODALVISIBLE',
  payload: { modalVisible: true },
};
