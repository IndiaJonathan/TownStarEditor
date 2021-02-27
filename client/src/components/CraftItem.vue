<template>
  <b-card
    :title="craftItem.Name">
    <b-container fluid>
      <b-row class="cityPointsContainer" >
        <b-col sm="4">
          <label> City Points: </label>
        </b-col>
        <b-col sm="5">
          <b-form-input
            v-model="form.cityPoints"
            type="number">
          </b-form-input>
        </b-col>
      </b-row>

      <b-row class="cityPriceContainer" >
        <b-col sm="4">
          <label> City Price: </label>
        </b-col>
        <b-col sm="5">
          <b-form-input
            v-model="form.cityPrice"
            type="number">
          </b-form-input>
        </b-col>
      </b-row>

      <b-row class="craftClassContainer" >
        <b-col sm="4">
          <label> Class: </label>
        </b-col>
        <b-col sm="5">
          <b-form-select
            v-model="form.class"
            :options="craftClasses">
          </b-form-select>
        </b-col>
      </b-row>

      <b-row class="craftTextContainer" >
        <b-col sm="4">
          <label> Crafting Text: </label>
        </b-col>
        <b-col sm="5">
          <b-form-input
            v-model="form.craftingText"
            type="text">
          </b-form-input>
        </b-col>
      </b-row>

      <b-row class="craftHexColour" >
        <b-col sm="4">
          <label> Crafting Hex Colour: </label>
        </b-col>
        <b-col sm="5">
          <div :style="{'background-color': this.colors}"> b </div>
        </b-col>
      </b-row>

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
    </b-container>

  </b-card>
</template>

<script>
var colors = '#194D33A8'

export default {
  data () {
    return {
      form: {
        cityPoints: -1,
        CityPrice: -1,
        class: null,
        craftingText: '',
        hexColor: null
      },
      colors
    }
  },
  methods: {
  },
  mounted () {
    this.form.cityPoints = this.craftItem.CityPoints
    this.form.cityPrice = this.craftItem.CityPrice
    this.form.class = this.craftItem.Class
    this.form.craftingText = this.craftItem.CraftingText
    this.form.hexColor = this.craftItem.HexColor
  },
  props: {
    craftItem: {
      required: true
    },
    craftClasses: {
      required: true
    }
  }
}
</script>

<style scoped>
</style>
