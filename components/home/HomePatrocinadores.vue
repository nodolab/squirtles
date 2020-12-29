<template>
  <v-container>
    <v-row justify="center" class="mb-12 white--text">
      <v-col cols="10" md="8">
        <h2 class="section_title text-center mb-10">[PATROCINADORES]</h2>
        <h2 class="display-1 font-weight-medium text-center mb-12">
          ¿Te gustaría colaborar con nosotros?
        </h2>
      </v-col>
      <v-col cols="10" md="7" class="text-center">
        <!-- <h3 class="text-center font-weight-regular mb-4">Registrate para enviarte más información</h3> -->
        <!-- <NewsletterForm/> -->
        <v-btn
          x-large
          outlined
          color="#7bdb8e"
          height="60"
          class="whatsapp_button"
        >
          <v-icon large class="mr-3">mdi-whatsapp</v-icon>
          <span class="white--text">
            Envianos WhatsApp
          </span>
        </v-btn>
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
.whatsapp_button {
  text-transform: none;
  border-radius: 15px;
}
</style>
