<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <LearningGuide/>
</template>

<script>
import LearningGuide from './components/LearningGuide.vue'

export default {
  name: 'App',
  components: {
    LearningGuide
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
