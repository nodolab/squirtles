<template>
  <button class="btn_cta" @click="$router.push('#patrocinadores')">
    ¡ÚNETE!
  </button>
</template>

<script>
export default {
  name: 'ButtonCTA'
}
</script>

<style lang="scss" scoped>
.btn_cta {
  $hover_color: lighten($primary, 5%);
  background: rgba($secondary,0.9);
  color: #FFF;
  border: 2px solid #FFF;
  padding: 0.4rem 1.2rem;
  font-weight: 500;
  font-size: 1.1rem;
  letter-spacing: 4px;
  transition: color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  &:hover {
    border-color: $hover_color;
    color: $hover_color;
  }
  @media screen and ($desktop) {
    // font-size: 2.5rem;
    padding: 0.8rem 1.5rem;
  }
}
</style>
