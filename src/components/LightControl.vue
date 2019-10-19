<template>
  <v-card max-width="344" class="mx-auto">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline"
          >Light Control Component
        </v-list-item-title>
        <v-list-item-subtitle
          >Write something that makes sense here.
        </v-list-item-subtitle>
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

<script lang="ts">
import {
  DefaultApi,
  OpenbaseActionInitiatorInitiatorType,
  OpenbaseActionParameter,
  OpenbasePowerState,
  OpenbasePowerStateState,
  OpenbaseServiceTemplateServiceType
} from "@openbase/bco-openapi";
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class LightControl extends Vue {
  switch1 = true;

  postLightSwitch() {
    const value = this.switch1
      ? OpenbasePowerStateState.ON
      : OpenbasePowerStateState.OFF;

    const api = new DefaultApi("http://ewa:8484/");
    const powerState: OpenbasePowerState = {
      value: value
    };
    const parameter: OpenbaseActionParameter = {
      serviceStateDescription: {
        unitId: "53b59c91-dd89-4a24-95ae-0ba841634039",
        serviceType: OpenbaseServiceTemplateServiceType.POWERSTATESERVICE,
        serviceState: JSON.stringify(powerState)
      },
      actionInitiator: {
        initiatorType: OpenbaseActionInitiatorInitiatorType.HUMAN
      }
    };
    api.unitApplyActionPost(parameter).catch(reason => console.error(reason));
  }
}
</script>

<style></style>
