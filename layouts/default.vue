<template>
  <v-app>
    <LayoutHeader :light-mode="headerLightMode"/>
    <v-main>
      <nuxt />
    </v-main>
    <LayoutFooter/>
  </v-app>
</template>

<script>
export default {
  name: 'LayoutDefault',
  data () {
    return {
      headerLightMode: null
    }
  },
  watch: {
    $route (to, from) {
      this.changeHeaderMode(to.name)
    }
  },
  created () {
    this.changeHeaderMode(this.$route.name)
  },
  methods: {
    changeHeaderMode (path) {
      this.headerLightMode = path === 'index' || false
    }
  }
}
</script>
