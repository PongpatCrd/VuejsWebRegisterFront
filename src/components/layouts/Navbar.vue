<template>
  <div>
    <b-navbar toggleable type="dark" variant="dark">
      <b-navbar-brand href="/">
        <b-icon 
          icon="bug-fill" 
          class="rounded p-2" 
          variant="info"
          font-scale="3"
        ></b-icon>
      </b-navbar-brand>
      
      <div v-if="hasLink">
        <b-navbar-toggle target="navbar-toggle-collapse">
          <template #default="{ expanded }">
            <b-icon v-if="expanded" icon="chevron-bar-up" variant="info" font-scale="1.8"></b-icon>
            <b-icon v-else icon="chevron-bar-down" variant="info" font-scale="1.8"></b-icon>
          </template>
        </b-navbar-toggle>

        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Link 1</b-nav-item>
            <b-nav-item href="#">Link 2</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>
        </b-collapse>  
      </div>
      
    </b-navbar>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Navbar',
  props: {
    hasLink: {
      default: false,
      type: Boolean
    }
  }
})
</script>

<style scoped>
  
</style>