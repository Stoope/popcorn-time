// @flow
type State = { fontSize: string };

const initialState: State = {
  fontSize: '18px'
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    // case 'ADD_TODO':
    //   return {
    //     ...state,
    //     value: 47
    //   };
    default:
      return state;
  }
};

export default reducer;
