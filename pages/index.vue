<template>
  <div>
    <section class="section_1 full_h">
      <v-row class="h-100 relative">
        <div class="slider_wrapper">
          <SliderHome/>
        </div>
        <v-col cols="12" class="gradient_top">
          <v-container class="d-flex flex-column align-center justify-center h-100">
            <h1 class="display_text display_text--white mb-6">NATACIÓN • CICLISMO • CARRERA</h1>
            <!-- <ui-button-cta/> -->
            <UiButtonCta/>
          </v-container>
        </v-col>
      </v-row>
    </section>
    <section id="nosotros" class="py_section">
      <HomeAbout/>
    </section>
    <section id="programas" class="grey lighten-5 py_section">
      <HomeProgramas/>
    </section>
    <section id="testimonios" class="py_section">
      <HomeTestimonios/>
    </section>
    <v-row justify="center">
      <v-col cols="10" md="6">
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <section id="comunidad" class="py_section">
      <HomeComunidad/>
    </section>
    <section id="patrocinadores" class="py_section bg_image bg_image--2">
      <HomePatrocinadores/>
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
.slider_wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.section_1 {
  padding-top: $header_height;
}
</style>
