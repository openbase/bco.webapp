<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>BCO - </span>
        <span class="font-weight-light">USER INTERFACE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-icon>mdi-anchor</v-icon>
    </v-toolbar>

    <v-content>
      <LightControl />
    </v-content>
  </v-app>
</template>

<script>
import LightControl from "./components/LightControl";

export default {
  name: "App",
  components: {
    LightControl
  },
  data() {
    return {
      //
    };
  }
};
</script>
