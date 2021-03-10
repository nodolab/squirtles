<template>
  <div class="menu">
    <header :class="{ 'fixed_nav elevation-1': fixedNav }">
      <div class="logo__bar d-none d-md-block">
        <nuxt-link to="/">
          <img src="~assets/srtlogo.webp" alt="Squirtles Racing Team">
        </nuxt-link>
      </div>
      <nav class="d-none d-md-flex" :class="{ 'light': lightMode }">
        <nuxt-link
          v-for="({ to, text }) in items"
          :key="text"
          :to="to"
        >
          {{ text }}
        </nuxt-link>
      </nav>
      <div class="d-flex d-md-none mobile_bar elevation-1">
        <img src="~assets/srtlogo.webp" alt="" class="mobile_bar__logo">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      </div>
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
    <v-navigation-drawer
      v-model="drawer"
      temporary
      fixed
      width="300"
      overlay-opacity="0.8"
    >
      <template v-slot:prepend>
        <div class="logo__drawer">
          <img src="~assets/srtlogo.webp" alt="">
        </div>
      </template>
      <v-list dense class="mt-12">
        <v-list-item
          v-for="({ to, text }) in items"
          :key="text"
          link
          @click="$router.push(to)"
        >
          <v-list-item-content class="text-center">
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <UiWhatsappButton block tile/>
      </template>
    </v-navigation-drawer>
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
      fixedNav: false,
      drawer: false,
      items: [
        // {
        //   to: '/',
        //   text: 'INICIO'
        // },
        {
          to: '#nosotros',
          text: 'NOSOTROS'
        },
        {
          to: '#programas',
          text: 'PROGRAMAS'
        },
        {
          to: '#testimonios',
          text: 'TESTIMONIOS'
        },
        {
          to: '#comunidad',
          text: 'COMUNIDAD'
        },
        {
          to: '#patrocinadores',
          text: 'PATROCINADORES'
        }
      ]
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
    .logo__bar {
      display: none!important;
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
  z-index: 7;
}
.logo {
  &__bar {
    height: $header_height;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    img {
      height: 100%;
    }
  }
  &__drawer {
    width: 130px;
    margin: 2em auto 0;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
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
.mobile_bar {
  width: 100%;
  // display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2em 1.3em;
  &__logo {
    width: 65px;
  }
}
// @media screen and ($mobile) {
//   .logo_bar {
//     display: none;
//   }
// }
</style>
