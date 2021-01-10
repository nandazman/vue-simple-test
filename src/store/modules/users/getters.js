export default {
  getUsers(state) {
    return state.users.filter(user => {
      return (
        user.name.toLowerCase().includes(state.filter) ||
        user.username.toLowerCase().includes(state.filter)
      );
    });
  }
};
