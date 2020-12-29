<template>
  <div v-swiper="options">
    <div class="swiper-wrapper">
      <div v-for="(image, i) in images" :key="i" class="swiper-slide">
        <img :src="image" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderHome',
  data () {
    return {
      options: {
        speed: 1500,
        autoplay: {
          delay: 4000
        },
        loop: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        }
      },
      images: [
        '/img/squirtles01.webp',
        '/img/squirtles02.webp',
        '/img/squirtles03.webp'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-slide {
  // width: 100%;
  box-sizing: border-box;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    // object-position: center top;
  }
}
.swiper-container {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>
