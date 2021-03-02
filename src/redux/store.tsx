import { createStore } from 'redux';
import { ActionType } from './ActionType';

interface IAction {
  type: ActionType;
  text: string;
}

const todos = (state: any, action: IAction): string[] => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text]);
    default:
      return state;
  }
};

const store = createStore(todos);

export default store;
