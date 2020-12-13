<template>
  <div>
    <section class="section_1 full_h">
      <v-row class="h-100">
        <v-col cols="12" class="bg_image bg_image--1 gradient_top">
          <v-container class="d-flex flex-column align-center justify-center h-100">
            <h1 class="display_text display_text--white mb-6">NATACIÓN • CICLISMO • CARRERA</h1>
            <!-- <ui-button-cta/> -->
            <UiButtonCta/>
          </v-container>
        </v-col>
      </v-row>
    </section>
    <section>
      <HomeAbout/>
    </section>
  </div>
</template>

<script>
export default {
  beforeMount () {
    // window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    // handleScroll () {
    //   console.log(window.scrollY)
    // }
  }
}
</script>

<style lang="scss" scoped>
// .section_1 {
//   height: calc(100vh - #{$header_height});
// }
</style>
