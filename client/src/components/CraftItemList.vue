<template>
 <b-container>
  <b-row align-v = "center">
    <div v-for="(craftItem, index) in craftItems" :key="index">
      <craft-item v-for="{craft} in craftItems" :key="craft"
            :CityPoints=3
            :Name=craft.name
            />
    </div>
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
    craftItems: {
      required: true
    }
  }
}
</script>

<style scoped>
</style>
