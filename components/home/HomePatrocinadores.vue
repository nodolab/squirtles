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
        <UiWhatsappButton outlined/>
      </v-col>
    </v-row>
    <div class="brands">
      <div class="img_container brand_image--1">
        <img src="~assets/bikes_t2.webp" alt="">
      </div>
      <div class="img_container brand_image--2">
        <img src="~assets/g.png" alt="">
      </div>
      <div class="img_container brand_image--3">
        <img src="~assets/anaranjo.png" alt="">
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Patrocinadores'
}
</script>

<style lang="scss" scoped>
.brands {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.brand_image {
  &--1 {
    width: 150px;
    // margin-left: 80px;
  }
  &--2 {
    width: 110px;
    padding-top: 20px;
    margin-left: 4em;
    margin-right: 4em;
  }
  &--3 {
    width: 320px;
  }
}
</style>
