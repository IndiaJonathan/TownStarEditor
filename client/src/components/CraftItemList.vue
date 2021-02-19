<template>
 <b-container>
  <b-row align-v = "center">
        <craft-item
            :CityPoints=3
            Name="Test"
            />
  </b-row>
</b-container>
</template>

<script>
import CraftItem from './CraftItem.vue'
export default {
  components: { CraftItem },
  data () {
    return {
      perPage: 3,
      currentPage: 1,
      response: null
    }
  },
  props: {
    CraftItems: {
      required: true
    }
  }
}
</script>

<style scoped>
</style>
