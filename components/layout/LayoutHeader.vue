<template>
  <header :class="{ 'elevation-1': !lightMode }">
    <div class="logo_bar">
      <nuxt-link to="/">
        <img src="~assets/srtlogo.webp" alt="Squirtles Racing Team">
      </nuxt-link>
    </div>
    <nav :class="{ 'light': lightMode }">
      <Nuxt-link to="/nosotros">NOSOTROS</nuxt-link>
      <Nuxt-link to="/programas">PROGRAMAS</nuxt-link>
      <Nuxt-link to="/testimonios">TESTIMONIOS</nuxt-link>
      <Nuxt-link to="/comunidad">COMUNIDAD</nuxt-link>
      <Nuxt-link to="/patrocinadores">PATROCINADORES</nuxt-link>
      <Nuxt-link to="/contacto">CONTACTO</nuxt-link>
    </nav>
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
    font-size: 1.2rem;
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
</style>
