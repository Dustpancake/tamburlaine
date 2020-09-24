<template>
  <b-navbar type="dark" variant="dark" class="topbar">
    <b-navbar-nav class="ml">
      <i>tamburlaine: {{ppcwd}}</i>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <b-form-input class="mr-2 navitem" placeholder="Find..."></b-form-input>
      <b-button class="navitem" variant="outline-success">find</b-button>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
    computed: {
      ppcwd() {
        return this.$store.state.cwd
      }
    }
}
</script>

<style>
.topbar {
  position: fixed;
  width: 100%;
  height: 25px !important;
  top: 0px;
  z-index: 1000;
  padding-left: 70px;
  -webkit-app-region: drag;
  min-height: 25px !important;
}

.navitem {
  -webkit-app-region: no-drag !important;
  max-height: 2vh;
  min-height: 20px !important;
  padding: 0px;
  font-size: 13px;
}

input.navitem{
  width: 20vw !important;
  min-width: 200px !important;
}

button.navitem{
  padding-left: 10px;
  padding-right: 10px;
}

</style>
