<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="h-100" v-animate>
        <Logo />
        <p class="text anim fade">Mensaje</p>
      </div>
      <div class="h-100" v-animate>
        <p class="anim fade">Seccion 2</p>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  beforeMount () {
    // window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    // handleScroll () {
    //   console.log(window.scrollY)
    // }
  }
}
</script>

<style lang="scss" scoped>
.h-100 {
  height: 100vh;
  text-align: center;
}
p {
  font-size: 3em;
}
.before_enter {
  .anim {
    opacity: 0;
  }
  .fade {
    transform: translateY(150px);
  }
}
.has_transition {
  .anim {
    opacity: 1;
  }
  .fade {
    // opacity: 0;
    transform: translateY(0);
    transition: all 1.3s ease;
  }
}
</style>
