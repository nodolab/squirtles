<template>
  <v-container>
    <h2 class="section_title text-center mb-10">[COMUNIDAD]</h2>
    <v-row justify="center">
      <v-col cols="10">
        <div class="video mb-12">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/qJomEg_BYVA?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <!-- <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FNodoLabMarketing%2Fvideos%2F300836914263683%2F&show_text=false&width=560" width="100%" height="100%" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> -->
        </div>
      </v-col>
      <v-col cols="12">
        <h2 class="display-1 font-weight-medium text-center mb-12">
          ¡Síguenos en nuestras redes sociales!
        </h2>
        <UiSocial large center/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Comunidad'
}
</script>

<style lang="scss" scoped>
.video {
  position: relative;
  &:before {
    width: 100%;
    display: block;
    content: "";
    width: 100%;
    padding-top: 56.25%;
  }
  > iframe {
    position: absolute;
    top: 15px;
    left: 15px;
    // width: calc(100% - 30px);
  }
}
</style>
