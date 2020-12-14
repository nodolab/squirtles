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
    <!-- <section class="full_h">
      <h2>slider</h2>
      <div v-swiper:homeSlider="options">
        <div class="swiper-wrapper">
          <div v-for="i in 4" :key="i" class="swiper-slide">
            <img src="/img/about01.jpg" alt="">
          </div>
        </div>
      </div>
    </section> -->
    <section>
      <HomeAbout/>
    </section>
    <section>
      <HomeProgramas/>
    </section>
    <section>
      <HomeTestimonios/>
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
</style>
