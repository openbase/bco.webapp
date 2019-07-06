<template>
  <v-app>
    <v-app-bar app>
      <v-btn text icon>
        <v-icon>mdi-settings</v-icon>
      </v-btn>
      <v-toolbar-title class="headline text-uppercase">
        <span>BCO - </span>
        <span class="font-weight-light">USER INTERFACE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span>
        <!--        {{ new Date().getHours() + ':' + new Date().getMinutes()}}-->
        {{ time }}
      </span>
      <v-btn text icon>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <LightControl />
    </v-content>

    <v-bottom-navigation v-model="bottomNav" grow>
      <v-btn value="recent">
        <span>Dashboard</span>
        <v-icon>dashboard</v-icon>
      </v-btn>

      <v-btn value="favorites">
        <span>Rooms</span>
        <v-icon>room</v-icon>
      </v-btn>

      <v-btn value="nearby">
        <span>Devices</span>
        <v-icon>device_hub</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import LightControl from "./components/LightControl";

let moment = require('moment');

export default {
  name: "App",
  components: {
    LightControl
  },
  data() {
    return {
      time: ""
    };
  },
  methods: {
    getTime() {
      let self = this;
      this.time = moment().format("HH:mm:ss");
      setTimeout(self.getTime, 1000);
    }
  },
  mounted: function() {
    this.getTime();
  }
};
</script>
