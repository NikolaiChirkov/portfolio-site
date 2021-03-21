import { TModalAction } from '../interfaces/IModalContext';

export const initModalState: any = {
  modalVisible: false,
  data: [],
};

export const modalReducer = (action: TModalAction, state: any): any => {
  switch (action.type) {
    case 'CHANGE_MODALVISIBLE':
      return {
        ...state,
        modalVisible: action.payload.modalVisible,
      };
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
