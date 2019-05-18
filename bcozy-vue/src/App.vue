<template>
  <v-app>
    <v-navigation-drawer
            v-model="drawerRight"
            fixed
            right
            clipped
            app
    >
      <v-list dense>
        <v-list-tile @click.stop="right = !right">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
            color="blue-grey"
            dark
            fixed
            app
            clipped-right
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>BCozy</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="drawerRight = !drawerRight">
        <v-icon>devices_other</v-icon>
      </v-btn>
      <!--<v-toolbar-side-icon >mdi-tilde</v-toolbar-side-icon>-->
    </v-toolbar>
    <v-navigation-drawer
            v-model="drawer"
            fixed
            app
    >
      <v-list dense>
        <!--<v-list-tile @click.stop="left = !left">-->
          <!--<v-list-tile-action>-->
            <!--<v-icon>exit_to_app</v-icon>-->
          <!--</v-list-tile-action>-->
          <!--<v-list-tile-content>-->
            <!--<v-list-tile-title>Open Temporary Drawer</v-list-tile-title>-->
          <!--</v-list-tile-content>-->
        <!--</v-list-tile>-->
        Test
        <device-menu/>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn :href="source" icon large target="_blank" v-on="on">
                  <v-icon large>code</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn icon large href="https://codepen.io/johnjleider/pen/KQrPKJ" target="_blank" v-on="on">
                  <v-icon large>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <v-footer color="blue-grey" class="white--text" app>
      <span style="margin-left: 10px">BCozy</span>
      <v-spacer></v-spacer>
      <span style="margin-right: 10px">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'BCozy',
    data: () => ({
        drawer: false,
        drawerRight: false,
        right: false,
        left: false
    }),
    props: {
        source: String
    }
}
</script>
