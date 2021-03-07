<template>
  <div class = "app">
     <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-nav>
      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="File">
    <b-dropdown-item-button @click="onNewFile">Create New Edit From Default</b-dropdown-item-button>
    <b-dropdown-item-button @click="onSelectFile">Open Edit</b-dropdown-item-button>
      </b-nav-item-dropdown>
        </b-navbar-nav>
  </b-navbar>

  <div class = "content">

    <div class = "header">
      <b-container fluid>
          <b-row>
             <b-col sm="3">
                <b-form-input v-model="filename" placeholder="Unnamed File"></b-form-input>
             </b-col>
              <b-col sm="3">
                <b-button @click="save()"> Save Changes </b-button>
              </b-col>
          </b-row>
      </b-container>
    </div>

      <craft-item-list
        :craftItems="craftItems"
        :craftClasses="craftClasses"
        @select-color="openColorPicker"
      />
  </div>

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

  <b-modal id="modal-select-file" hide-footer size="sm" v-b-tooltip.hover title="Select A File">
      <b-list-group>
        <b-list-group-item v-for="file in availableFiles" :key="file"
        v-bind:class="{ 'active' : isSelected(file) }"
        v-on:click="selected = file"
        >{{file}}
        </b-list-group-item>
      </b-list-group>
    <b-button class="mt-3" block @click="openFile(selected)">Open</b-button>
  </b-modal>`

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
      availableFiles: [],
      craftItems: [],
      originalItems: [],
      selectedCraftItem: {
        name: '',
        color: null

      },
      selected: 0,
      filename: null
    }
  },
  methods: {
    async getCrafts () {
      const response = await TownStarDataService.getCrafts()
      this.craftItems = response.data.message
      this.originalItems = response.data.message
      this.filename = null
      console.log(this.craftClasses)
    },
    async getFiles () {
      const response = await TownStarDataService.getFiles()
      this.availableFiles = response.data.message
    },
    onNewFile () {
      this.getCrafts()
    },
    onSelectFile () {
      this.$bvModal.show('modal-select-file')
    },
    async openFile (filename) {
      try {
        const response = await TownStarDataService.getSavedFile(filename)
        this.craftItems = response.data.message
        this.originalItems = response.data.message
        this.selected = null
        this.filename = filename
        this.$bvModal.hide('modal-select-file')
      } catch (e) {
        this.makeErrorToast('Cannot Open File!')
        console.log('Cannot open file! ' + e)
      }
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
    async save () {
      const response = await TownStarDataService.saveCraft(this.filenameWithExt, this.craftItems)
      this.getFiles() // Refresh files now that another should be created
      console.log(response)
    },
    isSelected (i) {
      return i === this.selected
    },
    makeErrorToast (message) {
      this.$bvToast.toast(message, {
        title: 'Error',
        autoHideDelay: 5000,
        appendToast: false
      })
    }
  },
  mounted () {
    this.getFiles()
    this.getCrafts()
  },
  computed: {
    craftClasses: function () {
      const craftClasses = new Set()
      for (var craft in this.craftItems) {
        craftClasses.add(this.craftItems[craft].Class)
      }
      return Array.from(craftClasses)
    },
    filenameWithExt: function () {
      if (this.filename.endsWith('.json')) {
        return this.filename
      } else {
        return this.filename + '.json'
      }
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
.app {
}
.header{
  padding-top: 25px;
  padding-bottom: 25px;
  padding-right: 10px;
  padding-left: 10px;
}
</style>
