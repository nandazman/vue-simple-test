import { createLocalVue, mount } from "@vue/test-utils";
import Vue from "vue";
import Vuex from "vuex";
import Vuetify from "vuetify";
import userGetters from "../../src/store/modules/users/getters";

Vue.use(Vuetify);

import userData from "../../src/store/dummy/users";
import DataTable from "@/components/DataTable.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("DataTable.vue", () => {
  let store;
  let vuetify;
  let wrapper;
  let state;
  let actions;
  beforeEach(() => {
    vuetify = new Vuetify();

    state = {
      users: userData,
      filter: ""
    };

    actions = {
      moduleActionClick: jest.fn()
    };

    store = new Vuex.Store({
      modules: {
        users: {
          state,
          actions,
          namespaced: true,
          getters: userGetters
        }
      }
    });
  });

  const mountFunction = (component, options) => {
    return mount(component, {
      localVue,
      vuetify,
      store,
      ...options
    });
  };

  it("should have dummy data", () => {
    wrapper = mountFunction(DataTable, {
      stubs: ["v-table"]
    });

    expect(wrapper.is(DataTable)).toBe(true);
    expect(wrapper.vm.users).toEqual(userData);
  });
});
