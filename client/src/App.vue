<template>
  <div id="app">
    <h1> Test </h1>
    <b-button @click="save()"> Save Changes </b-button>
    <craft-item-list
      :craftItems="craftItems"
      :craftClasses="craftClasses"
      @select-color="openColorPicker"
    />

        <b-modal id="bv-modal-example2" hide-footer size="sm" v-b-tooltip.hover title="Colour Picker">

    <b-container fluid v-b-tooltip.hover title="(Yes, we're using the British spelling)">
        <b-row>
          <b-col align-self="center">
    <photoshop-picker v-model="selectedCraftItem.color" align-v="center" />
          </b-col>
    </b-row>
    </b-container>
    <b-button class="mt-3" block @click="saveColorPicker()">Close Me</b-button>
    <b-button class="mt-3" block @click="closeColorPicker()">Cancel</b-button>
  </b-modal>

  </div>
</template>

<script>
// v-for="craftItem in craftItems" :key=craftItem.
import CraftItem from './components/CraftItem.vue'
import CraftItemList from './components/CraftItemList.vue'
import TownStarDataService from './services/TownStarDataService.js'
import { Chrome } from 'vue-color'

export default {
  components: { CraftItem, CraftItemList, 'photoshop-picker': Chrome },
  name: 'App',
  data () {
    return {
      craftItems: [],
      originalItems: [],
      selectedCraftItem: {
        name: '',
        color: null

      }
    }
  },
  methods: {
    async getCrafts () {
      const response = await TownStarDataService.getCrafts()
      this.craftItems = response.data.message
      this.originalItems = response.data.message
      console.log(this.craftClasses)
    },
    onOk () {
      console.log('ok')
    },
    openColorPicker (craftName) {
      this.selectedCraftItem = {
        name: craftName,
        color: this.craftItems[craftName].HexColor
      }
      this.$bvModal.show('bv-modal-example2')
    },
    saveColorPicker () {
      this.craftItems[this.selectedCraftItem.name].HexColor = this.selectedCraftItem.color.hex.slice(1)
      this.closeColorPicker()
    },
    closeColorPicker () {
      this.$bvModal.hide('bv-modal-example2')
    },
    save () {
      console.log('save')
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
