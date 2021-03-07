<template>
  <b-card
    :title="craftItem.Name">
    <b-card-body>
    <b-container fluid>
      <b-row class="cityPointsContainer" align-v="center">
        <b-col sm="5">
          <label> City Points: </label>
        </b-col>
        <b-col sm="5">
          <b-form-input
            v-model="form.CityPoints"
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
            v-model="form.CityPrice"
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
            v-model="form.Class"
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
            v-model="form.CraftingText"
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
  </b-card-body>
  </b-card>
</template>

<script>

export default {
  data () {
    return {
      form: {
        Name: 'Temp',
        CityPoints: -1,
        CityPrice: -1,
        Class: null,
        CraftingText: '',
        HexColor: 'red'
      },
      styleObject: {
        backgroundColor: 'red'
      }
    }
  },
  methods: {
    openColorPicker () {
      this.$emit('select-color', this.craftItem.Name)
    }
  },
  mounted () {
    this.form = this.craftItem

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
      this.styleObject.backgroundColor = '#' + this.craftItem.HexColor
    },
    'craftItem': function (newValue, oldvalue) {
      this.form = newValue
    }
  }
}
</script>

<style scoped>
</style>
