const sortAsc = (datas, key) => {
  return datas.sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
};

const sortDesc = (datas, key) => {
  return datas.sort((a, b) => {
    if (a[key] < b[key]) return 1;
    if (a[key] > b[key]) return -1;
    return 0;
  });
};

export default {
  sortUser({ commit, state }, data) {
    if (!data.type) return;
    const currentState = [...state.users];
    const sortFunc = data.type === "asc" ? sortAsc : sortDesc;
    const sortedData = sortFunc(currentState, data.key);
    commit("apply", sortedData);
  },
  deleteUserById({ commit, state }, id) {
    const currentState = [...state.users];
    const filteredData = currentState.filter(item => item.id !== id);
    commit("apply", filteredData);
  },
  updateUser({ commit, state }, data) {
    const currentState = [...state.users];
    const updatedData = currentState.map(item => {
      if (item.id === data.id) {
        item = data;
      }
      return item;
    });
    commit("apply", updatedData);
  },
  updateFilter({ commit }, data) {
    commit("updateFilter", data);
  }
};
