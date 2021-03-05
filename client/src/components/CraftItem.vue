<template>
  <b-card
    :title="craftItem.Name">
    <b-container fluid>
      <b-row class="cityPointsContainer" align-v="center">
        <b-col sm="5">
          <label> City Points: </label>
        </b-col>
        <b-col sm="5">
          <b-form-input
            v-model="form.cityPoints"
            type="number">
          </b-form-input>
        </b-col>
      </b-row>

      <b-row class="cityPriceContainer" align-v="center">
        <b-col sm="5">
          <label> City Price: </label>
        </b-col>
        <b-col sm="5">
          <b-form-input
            v-model="form.cityPrice"
            type="number">
          </b-form-input>
        </b-col>
      </b-row>

      <b-row class="craftClassContainer" align-v="center" >
        <b-col sm="5">
          <label> Class: </label>
        </b-col>
        <b-col sm="5">
          <b-form-select
            v-model="form.class"
            :options="craftClasses">
          </b-form-select>
        </b-col>
      </b-row>

      <b-row class="craftTextContainer" align-v="center">
        <b-col sm="5">
          <label> Crafting Text: </label>
        </b-col>
        <b-col sm="5">
          <b-form-input
            v-model="form.craftingText"
            type="text">
          </b-form-input>
        </b-col>
      </b-row>

      <b-row class="craftHexColour" align-v="center" >
        <b-col sm="5">
          <label> Crafting Colour: </label>
        </b-col>
        <b-col sm="5">
          <div @click="openColorPicker()" v-bind:style="styleObject">&nbsp;</div>
        </b-col>
      </b-row>
    </b-container>

  </b-card>
</template>

<script>

export default {
  data () {
    return {
      form: {
        cityPoints: -1,
        CityPrice: -1,
        class: null,
        craftingText: '',
        hexColor: 'red'
      },
      styleObject: {
        backgroundColor: 'red'
      }
    }
  },
  methods: {
    changeColor () {
      console.log('activated')
    },
    openColorPicker () {
      this.$emit('select-color', this.craftItem.Name)
    }
  },
  mounted () {
    this.form.cityPoints = this.craftItem.CityPoints
    this.form.cityPrice = this.craftItem.CityPrice
    this.form.class = this.craftItem.Class
    this.form.craftingText = this.craftItem.CraftingText
    this.form.hexColor = '#' + this.craftItem.HexColor

    this.styleObject.backgroundColor = '#' + this.craftItem.HexColor
  },
  props: {
    craftItem: {
      required: true
    },
    craftClasses: {
      required: true
    }
  },
  watch: {
    'craftItem.HexColor': function (newValue, oldvalue) {
      this.form.hexColor = '#' + this.craftItem.HexColor
      this.styleObject.backgroundColor = '#' + this.craftItem.HexColor
    }
  }
}
</script>

<style scoped>
</style>
