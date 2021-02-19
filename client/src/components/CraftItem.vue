<template>
  <b-card
    :title=Name>
    <b-card-text>
      City Points: {{CityPoints}}
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
