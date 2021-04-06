import { TModalAction, modalEntity } from '../interfaces/IModalContext';

export const hideModal: TModalAction = {
  type: 'CHANGE_MODALVISIBLE',
  payload: { modalVisible: false },
};

export const showModal = ({
  img,
  name,
  type,
  stack,
  linkHref,
  linkName,
  description,
}: modalEntity): TModalAction => ({
  type: 'CHANGE_MODALVISIBLE',
  payload: {
    modalVisible: true,
    data: {
      modal: {
        img,
        name,
        type,
        stack,
        linkHref,
        linkName,
        description,
      },
    },
  },
});
