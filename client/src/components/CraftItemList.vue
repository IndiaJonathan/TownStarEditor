<template>
 <b-container>
  <b-row align-v = "center">
      <craft-item v-for="craft in craftItems" :key="craft.name" :craftItem="craft" :craftClasses="craftClasses"/>
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
      currentPage: 1
    }
  },
  props: {
    craftItems: {
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
