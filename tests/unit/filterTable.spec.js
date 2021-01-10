import { mount, createLocalVue } from "@vue/test-utils";
import Vue from "vue";
import Vuex from "vuex";
import Vuetify from "vuetify";

Vue.use(Vuetify);

import FilterTable from "@/components/FilterTable.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("FilterTable.vue", () => {
  let store;
  let vuetify;
  let wrapper;
  let actions;

  beforeEach(() => {
    vuetify = new Vuetify();

    actions = {
      updateFilter: jest.fn()
    };

    store = new Vuex.Store({
      modules: {
        users: {
          namespaced: true,
          actions
        }
      }
    });
  });

  const mountFunction = (options = {}) => {
    return mount(FilterTable, {
      localVue,
      vuetify,
      store,
      ...options
    });
  };

  it("should called update filter method", async () => {
    wrapper = mountFunction();
    const input = wrapper.find("input");

    expect(input.exists()).toBe(true);

    input.element.value = "Monkey";
    input.trigger("keyup");

    expect(actions.updateFilter).toBeCalledTimes(1);
  });
});
