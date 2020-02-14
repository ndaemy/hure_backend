export default {
  Query: {
    isAdmin: (_, __, { request, isAdmin }) => {
      try {
        isAdmin(request);
      } catch (e) {
        return false;
      }
      return true;
    }
  }
};
