<template>
  <b-card
    :title="craftItem.Name">
    <b-card-text>
      City Points: {{craftItem.CityPoints}}
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    async getCrafts () {
    }
  },
  mounted () {
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
