import { mount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import UserForm from "@/components/modals/UserForm.vue";
import { addElemWithDataAppToBody } from "../helper";

Vue.use(Vuetify);

describe("UserForm.vue", () => {
  const user = {
    name: "Roronoa Zoro",
    username: "piratehunter",
    address: "Shimotsuki Village",
    id: 2
  };

  const newUser = {
    name: "Tony Tony Chopper",
    username: "cottoncandylover",
    address: "Drum Island",
    id: 6
  };

  let vuetify;

  addElemWithDataAppToBody();

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  const mountFunction = (options = { props: {} }) => {
    return mount(UserForm, {
      vuetify,
      propsData: {
        dialog: true,
        user,
        edit: false,
        ...options.props
      }
    });
  };

  it("should show userForm component", () => {
    const wrapper = mountFunction();

    expect(wrapper.is(UserForm)).toBe(true);
  });

  it("should show userForm with detail", () => {
    const wrapper = mountFunction();

    expect(wrapper.findAll("input").at(0).element.value).toBe(user.name);
    expect(wrapper.findAll("input").at(1).element.value).toBe(user.username);
    expect(wrapper.findAll("input").at(2).element.value).toBe(user.address);
  });

  it("should show userForm with new detail", async () => {
    const wrapper = mountFunction();

    await wrapper.setProps({
      user: newUser
    });

    expect(wrapper.findAll("input").at(0).element.value).toBe(newUser.name);
    expect(wrapper.findAll("input").at(1).element.value).toBe(newUser.username);
    expect(wrapper.findAll("input").at(2).element.value).toBe(newUser.address);
  });

  it("should show userForm readonly", () => {
    const wrapper = mountFunction();
    const allInput = wrapper.findAll("input");
    expect(allInput.at(0).attributes("readonly")).toBe("readonly");
    expect(allInput.at(1).attributes("readonly")).toBe("readonly");
    expect(allInput.at(2).attributes("readonly")).toBe("readonly");
    expect(wrapper.find(".success").exists()).toBe(false);
  });

  it("should show editable userForm with detail", () => {
    const wrapper = mountFunction({
      props: {
        edit: true
      }
    });

    const allInput = wrapper.findAll("input");
    expect(allInput.at(0).attributes("readonly")).toBe(undefined);
    expect(allInput.at(1).attributes("readonly")).toBe(undefined);
    expect(allInput.at(2).attributes("readonly")).toBe(undefined);
    expect(wrapper.find(".success").exists()).toBe(true);
  });

  it("should show editable userForm and update data", () => {
    const wrapper = mountFunction({
      props: {
        edit: true
      }
    });

    const allInput = wrapper.findAll("input");
    const nameInput = allInput.at(0);
    const userNameInput = allInput.at(1);
    const addressInput = allInput.at(2);

    nameInput.setValue(newUser.name);
    userNameInput.setValue(newUser.username);
    addressInput.setValue(newUser.address);

    expect(nameInput.element.value).toBe(newUser.name);
    expect(userNameInput.element.value).toBe(newUser.username);
    expect(addressInput.element.value).toBe(newUser.address);
  });
});
