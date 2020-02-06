export const isAuthenticated = request => {
  if (!request.admin) {
    throw Error('You need to sign in first to perform this action.');
  }
  return;
};
