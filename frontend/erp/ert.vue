<template>
   <v-app dark>
      <v-navigation-drawer app stateless hide-overlay v-model="drawer">
        <v-list dense>
          <v-list-tile @click="viewPage('home')">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="viewPage('company')">
            <v-list-tile-action>
              <v-icon>contact_mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Company</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list dense class="pt-0">
          <v-list-tile v-for="item in items" :key="item.title" @click="viewPage(item.url)">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar app dark fixed color="deep-purple">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Application</v-toolbar-title>
      </v-toolbar>
      <v-content dark>
        <v-container fluid dark>
          <router-view></router-view>
        </v-container>
      </v-content>
      <v-footer app color="deep-purple">
        <span class="white--text">&copy; 2017</span>
      </v-footer>
  </v-app>
</template>
<script>
export default {
  name: 'app',
  data () {
    return{
      drawer:null,
      items: [
        { title: 'Home', icon: 'dashboard', url:'Home' },
        { title: 'Company', icon: 'question_answer', url:'Company'}
      ],
    }
  },
  methods:{
    viewPage(res){
      this.$router.push(res);
      this.drawer = ! this.drawer;
    },
  }
}
</script>
<style scoped>
   
</style>