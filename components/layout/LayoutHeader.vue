<template>
  <header>
    <div class="logo_bar">
      <img src="~assets/srtlogo.webp" alt="Squirtles Racing Team">
    </div>
    <nav>
      <a href="#">NOSOTROS</a>
      <a href="#">PROGRAMAS</a>
      <a href="#">TESTIMONIOS</a>
      <a href="#">COMUNIDAD</a>
      <a href="#">PATROCINADORES</a>
      <a href="#">CONTACTO</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
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
    color: #f2f2f2;
    font-size: 1.2rem;
  }
  a:not(:last-child) {
    border-right: 2px solid #DDD;
  }
}
</style>
