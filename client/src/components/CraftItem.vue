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
    </b-container>

  </b-card>
</template>

<script>
export default {
  data () {
    return {
      form: {
        cityPoints: -1,
        CityPrice: -1
      }
    }
  },
  methods: {
  },
  mounted () {
    this.form.cityPoints = this.craftItem.CityPoints
    this.form.cityPrice = this.craftItem.CityPrice
  },
  props: {
    craftItem: {
      required: true
    }
  }
}
</script>

<style scoped>
</style>
