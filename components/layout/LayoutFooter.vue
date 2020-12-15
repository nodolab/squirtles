<template>
  <footer class="py_section">
    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="wave">
      <path fill="#7bdb8e" fill-opacity="1" d="M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,250.7C672,235,768,213,864,197.3C960,181,1056,171,1152,160C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
    </svg> -->
    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="wave">
      <path fill="#7bdb8e" fill-opacity="1" d="M0,128L40,138.7C80,149,160,171,240,165.3C320,160,400,128,480,112C560,96,640,96,720,90.7C800,85,880,75,960,96C1040,117,1120,171,1200,197.3C1280,224,1360,224,1400,224L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"/>
    </svg> -->
    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="wave">
      <path fill="#7bdb8e" fill-opacity="1" d="M0,0L120,26.7C240,53,480,107,720,112C960,117,1200,75,1320,53.3L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"/>
    </svg> -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="wave">
      <path fill="#7bdb8e" fill-opacity="1" d="M0,64L120,64C240,64,480,64,720,106.7C960,149,1200,235,1320,277.3L1440,320L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"/>
    </svg>
    <v-container>
      <v-row align="center" justify="start" class="mb-6">
        <v-col cols="2">
          <v-divider class="green lighten-3"></v-divider>
        </v-col>
        <v-col cols="1" class="img_container">
          <img src="~assets/srticon.png" alt="">
        </v-col>
        <v-col cols="2">
          <v-divider class="green lighten-3"></v-divider>
        </v-col>
      </v-row>
      <v-row align="end" justify="center" class="mb-12">
        <v-col cols="6">
          <h3 class="brand_title mb-8">[SQUIRTLES RACING TEAM]</h3>
          <UiAddressItem
            phone="443 182 5004"
          >
            Cuitas 58095, Morelia Mich.
          </UiAddressItem>
        </v-col>
        <v-col cols="6">
          <p>Siguenos en:</p>
          <UiSocial/>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col cols="6">
          <p>&copy; Squirtles Racing Team {{ new Date().getFullYear() }}</p>
        </v-col>
        <v-col cols="6" class="text-right">
          <a href="javascritp:;" target="_blank" rel="noopener noreferrer" class="link">Made By</a>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
footer {
  // background: $secondary;
  position: relative;
  padding-top: 12rem;
  padding-bottom: 2rem;
  // border-top: 1px solid rgba(0,0,0,0.2);
  .wave {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    // transform: rotateZ(180deg);
  }
}
.brand_title {
  color: #454648;
  letter-spacing: 4px;
  // text-align: center;
}
.link {
  color: #454647;
}
</style>
