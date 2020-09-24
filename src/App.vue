<template>
  <div id="app" style="position: relative;">
    <navbar/>
    <div class="main-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/github-md.css';
import './assets/prism-mui.css';

import navbar from './components/navbar.vue'

export default {
  name: 'App',

  components: {
    navbar
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.main-content {
  position: relative;
  top: 2.7vh;
}
</style>
