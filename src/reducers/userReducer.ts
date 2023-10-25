interface UserState {
  isAuthenticated: boolean;
  username: string;
}

const initialState: UserState = {
  isAuthenticated: false,
  username: '',
};

const userReducer = (state: UserState = initialState, action: any): UserState => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, isAuthenticated: true, username: action.payload.username };
    case 'LOGIN_FAILURE':
      return { ...state, isAuthenticated: false, username: '' };
    default:
      return state;
  }
};

export default userReducer;
