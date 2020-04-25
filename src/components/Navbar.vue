<template>
  <b-navbar type="is-transparent" wrapper-class="container" :fixed-top="true">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="@/assets/logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template slot="start"> </template>

    <template slot="end">
      <!-- <b-navbar-item>
        <router-link class="" to="/">Home</router-link>
      </b-navbar-item>
      <b-navbar-item>
        <router-link class="" to="/docs">Docs</router-link>
      </b-navbar-item> -->
      <b-navbar-item tag="div">
        <!-- Place this tag where you want the button to render. -->
        <!-- Place this tag where you want the button to render. -->
        <github-button
          href="https://github.com/geongeorge/canvas-txt"
          data-color-scheme="no-preference: light; light: light; dark: dark;"
          data-size="large"
          data-show-count="true"
          aria-label="Star geongeorge/canvas-txt on GitHub"
          >Star</github-button
        >
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import GithubButton from 'vue-github-button'

export default {
  components: {
    GithubButton
  }
}
</script>
<style>
.navbar {
  background-color: transparent;
}
</style>
