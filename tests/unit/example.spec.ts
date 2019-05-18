import { shallowMount } from "@vue/test-utils";

import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);
import LightControl from "@/components/LightControl.vue";

describe("LightControl.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(LightControl, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatchSnapshot();
  });
});
