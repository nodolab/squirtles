<template>
  <div class="menu">
    <header :class="{ 'fixed_nav elevation-1': fixedNav }">
      <div class="logo_bar">
        <nuxt-link to="/">
          <img src="~assets/srtlogo.webp" alt="Squirtles Racing Team">
        </nuxt-link>
      </div>
      <nav :class="{ 'light': lightMode }">
        <nuxt-link to="/">INICIO</nuxt-link>
        <nuxt-link to="#nosotros">NOSOTROS</nuxt-link>
        <nuxt-link to="#programas">PROGRAMAS</nuxt-link>
        <nuxt-link to="#testimonios">TESTIMONIOS</nuxt-link>
        <nuxt-link to="#comunidad">COMUNIDAD</nuxt-link>
        <nuxt-link to="#patrocinadores">PATROCINADORES</nuxt-link>
      </nav>
    </header>
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
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    /**
     * Para cambiar fondo por defecto al usar navegacion por secciones
     * Valor cambia en layouts/default.vue
     */
    lightMode: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      showBtn: false,
      fixedNav: false
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      this.fixedNav = window.scrollY > 100 || false
      this.showBtn = window.scrollY > window.innerHeight / 2 || false
    },
    goTop () {
      window.scroll({ top: 0 })
      console.log(this.$route.name)
      if (this.$route.name === 'index') {
        this.$router.replace('/').catch(err => err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  z-index: 10;
  .fixed_nav {
    position: fixed;
    left: 0;
    // padding-top: 1rem;
    // padding-bottom: 1rem;
    background: #FFF;
    transform: translateY(-100%);
    animation: menu .3s linear 0.3s forwards;
    .logo_bar {
      display: none;
    }
    nav {
      padding: 1rem 0;
      will-change: padding;
      transition: padding 0.7s ease-in-out 0.6s;
    }
    a {
      color: #111;
    }
  }
}
@keyframes menu {
  to {
    transform: translateY(0);
  }
}
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
