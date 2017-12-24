<template>
   <v-app>
      <v-navigation-drawer app stateless hide-overlay :mini-variant.sync="mini" v-model="drawer">
          
      </v-navigation-drawer>
      <v-toolbar app></v-toolbar>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
      <v-footer app></v-footer>
  </v-app>
</template>
<script>
export default {
  name: 'app',
  data () {
    return{
    }
  },
}
</script>
<style scoped>
   
</style>