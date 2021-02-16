<template>
  <div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: ''
    }
  },
  watch: {
    selected (selection) {
      console.log('Selection has changed', selection)
    }
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
