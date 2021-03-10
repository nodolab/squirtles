<template>
  <div>
    <h2 class="section_title text-center mb-6 mt-4">[COMUNIDAD]</h2>
    <h2 class="display-1 font-weight-regular text-center mb-8">
      ¡Síguenos en nuestras redes sociales!
    </h2>
    <div class="gallery mb-6">
      <div
        v-for="(img, i) in gallery"
        :key="i"
        class="gallery__item"
      >
        <img :src="img" alt="" @click="dialog = true; imgSrc = img">
        <div class="overlay">
          <v-icon color="#f2f2f2" class="icon">mdi-arrow-expand</v-icon>
        </div>
      </div>
    </div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <UiSocial large center/>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog
      v-model="dialog"
      fullscreen
      transition="fade-transition"
    >
      <div class="overlay_content py-8" @click="dialog = false">
        <img :src="imgSrc" alt="" class="img_gallery" @click.stop="">
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'Comunidad',
  data () {
    return {
      dialog: false,
      imgSrc: '',
      gallery: [
        '/img/galeria/GALERIA01.webp',
        '/img/galeria/GALERIA02.webp',
        '/img/galeria/GALERIA03.webp',
        '/img/galeria/GALERIA04.webp',
        '/img/galeria/GALERIA05.webp',
        '/img/galeria/GALERIA06.webp',
        '/img/galeria/GALERIA07.webp',
        '/img/galeria/GALERIA08.webp',
        '/img/galeria/GALERIA09.webp'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.gallery {
  width: 100%;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 300px);
  @media screen and ($tablet) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 300px);
  }
  @media screen and ($desktop) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 300px);
  }
  &__item {
    position: relative;
    cursor: pointer;
    &:last-child {
      grid-column: span 2;
      @media screen and ($tablet) {
        grid-column: span 1;
      }
    }
    @media screen and ($desktop) {
      &:nth-child(2) {
        grid-column: 2 / span 2; // span le dice que tome 2 columns
      }
      &:nth-child(3) {
        grid-row-end: span 2;
      }
      &:nth-child(4) {
        grid-column: 1 / span 2;
      }
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0, 0.4);
      opacity: 0;
      transition: opacity 0.3s ease-out;
      pointer-events: none;
      .icon {
        opacity: 0;
        transform: scale3d(1.2, 1.2, 1);
        transition: all 0.2s ease-out 0.3s;
      }
    }
    &:hover {
      // transform: scale3d(1.04,1.04,1);
      // z-index: 1;
      .overlay {
        opacity: 1;
        .icon {
          opacity: 1;
          transform: scale3d(1,1,1);
        }
      }
    }
  }
}
.overlay_content {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  img {
    display: block;
    height: 100%;
    object-fit: contain;
  }
}
// .video {
//   position: relative;
//   &:before {
//     width: 100%;
//     display: block;
//     content: "";
//     width: 100%;
//     padding-top: 56.25%;
//   }
//   > iframe {
//     position: absolute;
//     top: 15px;
//     left: 15px;
//     // width: calc(100% - 30px);
//   }
// }
</style>
