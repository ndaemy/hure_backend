export const isAdmin = request => {
  if (!request.admin) {
    throw Error('You are not Administrator!');
  }
  return;
};

export const isUser = request => {
  if (!request.user) {
    throw Error('You need to sign in first to perform this action.');
  }
  return;
};

export const isAdminOrUser = request => {
  if (!request.admin && !request.user) {
    throw Error('You need to sign in first to perform this action.');
  }
  return;
};
