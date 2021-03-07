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

      <b-row class="craftClassProximityBonus" align-v="center" >
        <b-col sm="5">
          <label> Proximity Bonus: </label>
        </b-col>
        <b-col sm="5">
          <b-form-select
            :value="this.proximityBonusArr"
            @change="onProximitySelectionChange"
            :options="proximityBonusOptions" multiple :select-size="4"></b-form-select>
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
        HexColor: 'red',
        ProximityBonus: []
      },
      styleObject: {
        backgroundColor: 'red'
      }
    }
  },
  methods: {
    openColorPicker () {
      // Pass event up to main app
      this.$emit('select-color', this.craftItem.Name)
    },
    onProximitySelectionChange (proximitySelections) {
      // Update proximity selection stored for craft
      if (proximitySelections.length > 0) {
        this.form.ProximityBonus = proximitySelections.join(',')
      } else {
        this.form.ProximityBonus = 'None'
      }
    }
  },
  mounted () {
    this.form = this.craftItem

    this.styleObject.backgroundColor = '#' + this.craftItem.HexColor // Need to add # so component recognizes it. Could probably move to computed
  },
  props: {
    craftItem: {
      required: true
    },
    craftClasses: {
      required: true
    },
    proximityBonusOptions: {
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
  },
  computed: {
    proximityBonusArr: function () {
      // Need to translate json format to array in order to be used by form
      if (!this.craftItem.ProximityBonus || this.craftItem.ProximityBonus === 'None') {
        return []
      } else {
        return this.craftItem.ProximityBonus.split(',')
      }
    }
  }
}
</script>

<style scoped>
</style>
