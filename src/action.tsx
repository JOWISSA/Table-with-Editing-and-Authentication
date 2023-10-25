export const setCurrentPage = (page: number) => {
  return {
    type: 'SET_CURRENT_PAGE',
    payload: page,
  };
};

export const loginSuccess = (username: string) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: { username },
  };
};

export const loginFailure = () => {
  return {
    type: 'LOGIN_FAILURE',
  };
};
