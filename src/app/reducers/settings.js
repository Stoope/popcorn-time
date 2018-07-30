// @flow
type State = { value: boolean };

const initialState: State = {
  value: '18px'
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    // case 'ADD_TODO':
    //   return {
    //     ...state,
    //     value: 4
    //   };
    default:
      return state;
  }
};

export default reducer;
