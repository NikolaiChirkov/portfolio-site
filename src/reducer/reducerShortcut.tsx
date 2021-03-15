export const hideModal = (): any => ({
  type: 'CHANGE_MODALVISIBLE',
  payload: { modalVisible: false },
});

export const showModal = (): any => ({
  type: 'CHANGE_MODALVISIBLE',
  payload: { modalVisible: true },
});
