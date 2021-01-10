import { mount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import DeleteConfirmation from "@/components/modals/DeleteConfirmation.vue";
import { addElemWithDataAppToBody } from "../helper";

Vue.use(Vuetify);

describe("DeleteConfirmation.vue", () => {
  const name = "Monkey D. Luffy";
  let vuetify;

  addElemWithDataAppToBody();

  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it(`should render delete confirmation with ${name}`, async () => {
    const wrapper = mount(DeleteConfirmation, {
      vuetify,
      propsData: {
        dialog: true,
        user: {
          name
        }
      }
    });

    expect(wrapper.is(DeleteConfirmation)).toBe(true);

    const $name = wrapper.find("span");
    expect($name.exists()).toBe(true);
    expect($name.text()).toBe(name);
  });
});
