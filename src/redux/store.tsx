import { createStore } from 'redux';

const todos = (state: Array<string> = [], action: {type: string, text: string}) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}

const store = createStore(todos);

export default store;