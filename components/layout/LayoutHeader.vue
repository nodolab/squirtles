<template>
  <header :class="{ 'elevation-1': !lightMode }">
    <div class="logo_bar">
      <nuxt-link to="/">
        <img src="~assets/srtlogo.webp" alt="Squirtles Racing Team">
      </nuxt-link>
    </div>
    <nav :class="{ 'light': lightMode }">
      <Nuxt-link to="/">NOSOTROS</nuxt-link>
      <Nuxt-link to="/">PROGRAMAS</nuxt-link>
      <Nuxt-link to="/">TESTIMONIOS</nuxt-link>
      <Nuxt-link to="/">COMUNIDAD</nuxt-link>
      <Nuxt-link to="/">PATROCINADORES</nuxt-link>
      <Nuxt-link to="/">CONTACTO</nuxt-link>
    </nav>
    <v-btn
      small
      fab
      color="green darken-1"
      dark
      class="btn_fixed anim"
      :class="{ 'btn_fixed__show': showBtn }"
      :ripple="false"
      @click="goTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    lightMode: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      showBtn: false
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      // this.fixedNav = window.scrollY > 100 || false
      this.showBtn = window.scrollY > window.innerHeight / 2 || false
    },
    goTop () {
      window.scroll({ top: 0 })
      // if (this.$route.name === 'Home') this.$router.replace('/').catch(err => err)
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.logo_bar {
  height: $header_height;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  img {
    height: 100%;
  }
}
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5em 0;
  a {
    padding: 0 1em;
    color: #111;
    // font-size: 1.2rem;
  }
  a:not(:last-child) {
    border-right: 2px solid #DDD;
  }
  &.light {
    a {
      color: #f2f2f2;
    }
  }
}
.btn_fixed {
  position: fixed;
  bottom: 15px;
  right: 15px;
  opacity: 0;
  transition: all 0.8s ease-out;
  &__show {
    opacity: 1;
  }
}
</style>
