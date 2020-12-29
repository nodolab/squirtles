<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="section_title text-center mb-6 mt-8">[ÚNETE AL EQUIPO]</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(img, i) in images"
        :key="i"
      >
        <div class="img_container feed_item">
          <img :src="img" alt="">
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeSocialFeed',
  data () {
    return {
      images: [
        '/img/testimonio02.jpg',
        '/img/testimonio03.jpg',
        '/img/social01.jpg',
        '/img/social02.jpg',
        '/img/social03.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.feed_item {
  border-radius: 8px;
  box-shadow: 5px 5px 8px 0px rgba(0,0,0,0.6);
  overflow: hidden;
  transition: all 0.2s ease-out;
  will-change: transform;
  &:hover {
    transform: translateY(-5px)
  }
}
</style>
