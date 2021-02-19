<template>
  <div id="app">
  </div>
</template>

<script>
// v-for="craftItem in craftItems" :key=craftItem.
import CraftItem from './components/CraftItem.vue'
import CraftItemList from './components/CraftItemList.vue'
import TownStarDataService from './services/TownStarDataService.js'
export default {
  components: { CraftItem, CraftItemList },
  name: 'App',
  data () {
    return {
      craftItems: []
    }
  },
  methods: {
    async getCrafts () {
      const response = await TownStarDataService.getCrafts()
      console.log(response.data)
    }
  },
  mounted () {
    this.craftItems = this.getCrafts()
  }
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
