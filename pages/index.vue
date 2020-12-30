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
    <section id="comunidad" class="pt_section bg_dark white--text">
      <HomeComunidad/>
    </section>
    <section id="patrocinadores" class="py_section bg_gradient">
      <div class="gradient_divider"></div>
      <div class="bg_patrocinadores">
        <img src="~assets/promobg_top.webp" alt="" class="fig fig--top fig--label">
        <img src="~assets/promobg_bottom.webp" alt="" class="fig fig--bottom fig--label">
        <img src="~assets/shirt_back.webp" alt="" class="fig fig--left fig--shirt">
        <img src="~assets/shirt_front.webp" alt="" class="fig fig--right fig--shirt">
      </div>
      <HomePatrocinadores class="sponsors"/>
    </section>
    <section class="pb_section">
      <HomeSocialFeed/>
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
.gradient_divider {
  position: absolute;
  left: 0;
  top: -2rem;
  width: 100%;
  height: 10rem;
  background: linear-gradient(to bottom, rgba(28,31,65,1) 30%, rgba(28,31,65,0.65) 62%, rgba(28,31,65,0) 100%);
  z-index: 2;
}
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
.bg_patrocinadores {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  .fig {
    position: absolute;
    left: 0;
    width: 100%;
    &--label {
      z-index: 1;
      opacity: 0.7;
    }
    &--shirt {
      height: 100%;
      width: auto;
      opacity: 0.15;
    }
    &--top {
      top: 0;
    }
    &--bottom {
      bottom: 0;
    }
    &--left {
      left: -25%;
    }
    &--right {
      left: auto;
      right: -25%;
    }
  }
}
.sponsors {
  position: relative;
  z-index: 2;
}
</style>
