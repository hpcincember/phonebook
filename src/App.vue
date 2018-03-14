<template>
  <div id="app">
      <app-header></app-header>
      <div class="container">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
  import Header from './components/layout/Header.vue'
  export default{
    components: {
      appHeader : Header
    }
  }
</script>