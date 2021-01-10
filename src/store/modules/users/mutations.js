export default {
  apply(state, data) {
    state.users = data;
  },
  updateFilter(state, data) {
    state.filter = data;
  }
};
