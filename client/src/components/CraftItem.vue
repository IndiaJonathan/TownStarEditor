<template>
 <b-container class="bv-example-row">
  <b-row align-v = "center">
    <b-col>
      <b-card
      :title=Name
      >
        <b-card-text>
        City Points: {{CityPoints}}
        </b-card-text>
      </b-card>
    </b-col>
    <b-col>2 of 3</b-col>
    <b-col>3 of 3</b-col>
  </b-row>
</b-container>
</template>

<script>
import TownStarDataService from '@/services/TownStarDataService.js'
export default {
  data () {
    return {
    }
  },
  methods: {
    async getCrafts () {
      const response = await TownStarDataService.getCrafts()
      console.log(response.data)
    }
  },
  mounted () {
    this.getCrafts()
  },
  props: {
    CityPoints: {
      type: Number,
      required: true
    },
    Name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
