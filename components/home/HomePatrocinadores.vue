<template>
  <v-container>
    <v-row justify="center" class="mb-12 white--text">
      <v-col cols="10" md="8">
        <h2 class="section_title text-center mb-10">[PATROCINADORES]</h2>
        <h2 class="display-1 font-weight-medium text-center mb-12">
          ¿Tienes un negocio o una marca que quieras promocionar?
        </h2>
      </v-col>
      <v-col cols="10" md="7">
        <h3 class="text-center font-weight-regular mb-4">Registrate para enviarte más información</h3>
        <NewsletterForm/>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="2">
        <img src="~assets/logo_clinica.svg" alt="" class="brand_image">
      </v-col>
      <v-col cols="2" offset="1">
        <img src="~assets/bikes_t2.webp" alt="" class="brand_image">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Patrocinadores'
}
</script>

<style lang="scss" scoped>
.brand_image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
