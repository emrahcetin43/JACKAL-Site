<template>
  <div class="app">
    <div class="wrapper">
      <NavBar class="nav" />
      <router-view class="view" />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "App",
  components: {
    NavBar
  }
}
</script>

<style>
@font-face {
  font-family: CooperHewitt;
  src: url('/assets/cooper-hewitt.heavy.otf') format('opentype');
}

html, body {
  margin: 0;
  padding: 0;
}

.app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #F3EDD7;
  height: 100vh;
  width: 100vw;
  background-image: url('./assets/JACKAL_CREAM_TRIMMED.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  background-color: black;
}

.wrapper {
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.90;
}
.nav {
  height: 40px;
  width: 100%;
}
.view {
  height: calc(100% - 40px);
  width: 100%;
}

</style>
