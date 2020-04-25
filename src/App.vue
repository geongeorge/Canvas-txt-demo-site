<template>
  <div id="app">
    <Navbar></Navbar>
    <section class="mt-20">
      <vue-page-transition name="fade-in-right">
        <router-view></router-view>
      </vue-page-transition>
    </section>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import AppFooter from './components/Footer'
export default {
  name: 'App',
  components: {
    Navbar,
    AppFooter
  }
}
</script>

<style>
@import './assets/margin-padding.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}
#app > section {
  min-height: 100vh;
}

body {
  fill: currentColor;
}

@media screen and (max-width: 720px) {
  .my-container {
    max-width: auto !important;
  }
}
@media screen and (min-width: 720px) {
  .my-container {
    max-width: 790px !important;
  }
}
</style>
