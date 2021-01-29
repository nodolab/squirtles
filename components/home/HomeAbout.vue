<template>
  <v-container>
    <v-row justify="center" align="center">
      <!-- <v-col cols="4" class="img_container">
        <img src="/img/winner.svg" alt="">
      </v-col> -->
      <v-col cols="12" sm="8" class="text-center">
        <!-- <h2 class="section_title text-center mb-12">[NOSOTROS]</h2> -->
        <h1 class="section_title mb-8 ">[SQUIRTLES RACING TEAM]</h1>
        <h3 class="font-weight-regular mb-12">
          <i>
            "Somos un equipo multidisciplinario de atletas de todas las edades y niveles principalmente en los deportes de: <br> Triatlón, Natación, Ciclismo y Carrera."
          </i>
        </h3>
      </v-col>
    </v-row>
    <v-row class="mb_space">
      <v-col cols="12" md="6" class="img_container">
        <img src="/img/alfonso_coach.webp" alt="">
      </v-col>
      <v-col cols="12" md="6" class="img_container">
        <p>
          El entrenador <strong>Alfonso Magaña Mondragón</strong>:
        </p>
        <p>
          Entrenador de Triatlón Certificado Nivel 3 por parte de la Federación Mexicana de Triatlón y la Confederación Panamericana de Triatlón, entre algunos de sus logros como atleta está:
        </p>
        <ul class="mb-6">
          <li>Seleccionado nacional para los mundiales de Canadá, Estados Unidos, México y Holanda</li>
          <li>Campeón del Mundo en Aquatlón.</li>
          <li>Campeón Nacional de triatlón.</li>
          <li>Condecoración al Premio al Mérito Juvenil de Deporte en Morelia Michoacán.</li>
          <li>Cuenta con experiencia en eventos Elite Nacional, Ironman, Xterra, Maratones y más.</li>
        </ul>
        <v-divider class="brand__color mb-2"></v-divider>
        <h4 class="lh-1">
          Alfonso Magaña Mondragón <br>
          <small class="subtitle-2">ENTRENADOR SQUIRTLES RACING TEAM</small>
        </h4>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="10" md="10">
        <h3 class="display-1 font-weight-medium text-center">Crecimiento del equipo</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="img_container w-100 relative">
          <img src="/img/squirtlesteam.webp" alt="">
          <p class="label_img_title w-100 mb-0">
            <strong>Squirtles Racing Team</strong>,
            <small>COMPETENCIA NACIONAL DE TRIATLÓN, IXTAPA, GRO. MAYO 2019</small>
          </p>
        </div>
      </v-col>
      <v-col cols="12">
        <p class="text-center">
          El equipo inició en el 2014 y desde el primer año ha estado presente en todos los campeonatos del mundo: Canadá 2014, Estados Unidos 2015, México 2016, Holanda 2017, Australia 2018, Suiza 2019.
        </p>
        <p class="text-center">
          Cuenta con participación de atletas juveniles en la olimpiada nacional, atletas en categoría élite, el equipo ofrece programas de entrenamientos para todos las edades y niveles en una gran variedad de pruebas y distancias; desde MTB a maratones como triatlones sprint y Ironman
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeAbout'
}
</script>

<style lang="scss" scoped>
.label_img_title {
  position: absolute;
  bottom: 0;
  left: 0;
  // right: 0;
  padding: 0.5rem 2rem;
  background: $primary;
  background: rgba($primary, 0.8);
  color: #FFF;
  text-align: center;
}
.about_title {
  letter-spacing: 3px;
}
</style>
