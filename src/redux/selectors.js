export const getContact = ({contacts}) => contacts.items;
export const getFilter = ({filter}) => filter.filter;
  
export const getState = ({ contacts }) => ({ isLoading: contacts.isLoading, error: contacts.error })

export const getLoggedIn = ({ auth }) => auth.isLoggedIn;
export const getUserName = ({ auth }) => auth.user.name;
export const getUserToken = ({ auth }) => auth.token;
export const getLoadingUserStatus = ({ auth }) => auth.isLoadingCurrentUser;
