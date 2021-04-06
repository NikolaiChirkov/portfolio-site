import { TModalAction, IModalState } from '../interfaces/IModalContext';

export const initModalState: IModalState = {
  modalVisible: false,
  data: {
    modal: {
      img: '',
      name: '',
      type: '',
      stack: '',
      linkHref: '',
      linkName: '',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    },
  },
};

export const modalReducer = (
  state: IModalState,
  action: TModalAction
): IModalState => {
  switch (action.type) {
    case 'CHANGE_MODALVISIBLE':
      return {
        ...state,
        modalVisible: action.payload.modalVisible,
        data: {
          modal: action.payload.data?.modal,
        },
      };
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
};
