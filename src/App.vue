<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/layouts/Navbar.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Navbar
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.click-able {
  cursor: pointer;
}

.group-tiem {
  display: inline-block
}

.center {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

.test {
  border: 2px solid red;
}
</style>
