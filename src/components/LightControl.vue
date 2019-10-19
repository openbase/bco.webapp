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
import { bco } from "@/api";
import {
  OpenbaseActionInitiatorInitiatorType,
  OpenbaseActionParameter,
  OpenbaseLabel,
  OpenbasePowerState,
  OpenbasePowerStateState,
  OpenbaseServiceTemplateServiceType
} from "@openbase/bco-openapi";
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class LightControl extends Vue {
  switch1 = true;

  mounted() {
    bco
      .registryUnitGetUnitConfigsGet()
      .then(value => {
        value.body.forEach(unitConfig => {
          try {
            console.log(
              (unitConfig.label as OpenbaseLabel).entry.pop().value.pop()
            );
          } catch (e) {
            console.warn("unable to print unit label", e);
          }
        });
      })
      .catch(reason => console.error(reason));
  }

  postLightSwitch() {
    const value = this.switch1
      ? OpenbasePowerStateState.ON
      : OpenbasePowerStateState.OFF;

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
    bco.unitApplyActionPost(parameter).catch(reason => console.error(reason));
  }
}
</script>

<style></style>
