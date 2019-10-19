<template>
  <v-card max-width="344" class="mx-auto">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline"
          >Light Control Component</v-list-item-title
        >
        <v-list-item-subtitle
          >Write something that makes sense here.</v-list-item-subtitle
        >
      </v-list-item-content>
      <p v-if="switch1">
        <v-icon x-large color="green darken-2">mdi-lightbulb</v-icon>
      </p>
      <p v-else>
        <v-icon x-large color="red darken-2">mdi-lightbulb</v-icon>
      </p>
    </v-list-item>

    <v-card-text>
      This component helps you to visualize the current state <br />and to
      switch it on or off.
    </v-card-text>
    <v-card-actions>
      <v-switch
        v-model="switch1"
        :label="`Switch 1: ${switch1.toString()}`"
        @change="postLightSwitch()"
      ></v-switch>
    </v-card-actions>
  </v-card>
</template>
<script>
import axios from "axios";

export default {
  data: function() {
    return {
      switch1: true
    };
  },
  created() {
    axios
      .get(`https://scummbar:8484/light`)
      .then(response => {
        this.switch1 = response.data.power_state.value === "ON";
      })
      .catch(e => {
        console.error(JSON.stringify(e, null, 2));
      });
  },
  methods: {
    postLightSwitch() {
      const value = this.switch1 ? "ON" : "OFF";

      axios
        .post(`https://scummbar:8484/unit/applyAction`, {
          id: "53b59c91-dd89-4a24-95ae-0ba841634039",
          power_state: {
            value
          }
        })
        .catch(e => {
          console.error(JSON.stringify(e, null, 2));
        });
    }
  }
};
</script>

<style></style>
