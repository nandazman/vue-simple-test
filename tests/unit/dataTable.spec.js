import { mount, createLocalVue } from "@vue/test-utils";
import Vue from "vue";
import Vuex from "vuex";
import Vuetify from "vuetify";

Vue.use(Vuetify);

import users from "../../src/store/dummy/users";
import DataTable from "@/components/DataTable.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("DataTable.vue", () => {
  let getters;
  let store;
  let vuetify;
  let wrapper;
  beforeEach(() => {
    vuetify = new Vuetify();
    getters = {
      getUsers: () => users
    };

    store = new Vuex.Store({
      modules: {
        users: {
          namespaced: true,
          getters
        }
      }
    });
  });

  const mountFunction = options => {
    return mount(DataTable, {
      localVue,
      vuetify,
      store,
      ...options
    });
  };

  it("should have dummy data", () => {
    wrapper = mountFunction({
      stubs: ["v-table"]
    });

    expect(wrapper.vm.users).toEqual(users);
  });
});
