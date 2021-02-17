<template>
  <div id="app">
    <craft-item
      :CityPoints=3
      Name="Test"
    />
  </div>
</template>

<script>
import CraftItem from './components/CraftItem.vue'
export default {
  components: { CraftItem },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
