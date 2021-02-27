<template>
  <div id="app">
      <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Open Modal</b-button>

    <h1> Test </h1>
    <div class="color-picker">
        </div>
    <craft-item-list
      :craftItems="craftItems"
      :craftClasses="craftClasses"
    />

    <b-modal id="bv-modal-example" hide-footer size="sm" title="Colour Picker (Yes, we're using the British spelling)">
    <b-container fluid>
        <b-row>
          <b-col align-self="center">
    <photoshop-picker v-model="colors" align-v="center" />
          </b-col>
    </b-row>
    </b-container>
    <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button>
  </b-modal>
  </div>
</template>

<script>
// v-for="craftItem in craftItems" :key=craftItem.
import CraftItem from './components/CraftItem.vue'
import CraftItemList from './components/CraftItemList.vue'
import TownStarDataService from './services/TownStarDataService.js'
import { Chrome } from 'vue-color'
var colors = '#194D33A8'

export default {
  components: { CraftItem, CraftItemList, 'photoshop-picker': Chrome },
  name: 'App',
  data () {
    return {
      craftItems: [],
      colors
    }
  },
  methods: {
    async getCrafts () {
      const response = await TownStarDataService.getCrafts()
      this.craftItems = response.data.message
      console.log(this.craftClasses)
    },
    onOk () {
      console.log('ok')
    }
  },
  mounted () {
    this.getCrafts()
    console.log(this.reversedMessage)
  },
  computed: {
    craftClasses: function () {
      const craftClasses = new Set()
      for (var craft in this.craftItems) {
        craftClasses.add(this.craftItems[craft].Class)
      }
      return Array.from(craftClasses)
    }
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
