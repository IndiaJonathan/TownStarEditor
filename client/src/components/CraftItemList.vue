<template>
 <b-card-group columns>
      <craft-item v-for="craft in craftItems" :key="craft.name" :craftItem="craft"
      :craftClasses="craftClasses"
      :proximityBonusOptions="proximityBonusOptions"
       @select-color="openColorPicker"/>
</b-card-group >
</template>

<script>
import CraftItem from './CraftItem.vue'

export default {
  components: { CraftItem },
  data () {
    return {
    }
  },
  props: {
    craftItems: {
      required: true
    },
    craftClasses: {
      required: true
    },
    proximityBonusOptions: {
      required: true
    }
  },
  methods: {
    openColorPicker (craftName) {
      this.$emit('select-color', craftName)
    }
  }
}
</script>

<style scoped>
</style>
