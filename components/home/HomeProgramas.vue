<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <!-- <h2 class="section_title text-center mb-12">[PROGRAMAS]</h2> -->
        <h2 class="display-2 font-weight-medium text-center lh_c">
          Promoción de entrenamientos <br>
          <small class="subtitle">TEMPORADA 2020</small>
        </h2>
      </v-col>
    </v-row>
    <v-row justify="center" class="my-12">
      <v-col cols="5">
        <UiPackage
          price="$6,000*"
        >
          POR UN AÑO DE <br> ENTRENAMIENTO TRIATLÓN
        </UiPackage>
      </v-col>
      <v-col cols="5">
        <UiPackage
          price="$4,000*"
        >
          POR UN AÑO DE ENTRENAMIENTO <br> EN DISCIPLINA INDIVIDUAL
        </UiPackage>
      </v-col>
      <!-- <v-col v-if="button" cols="12" class="text-center pt-12">
        <v-btn
          color="indigo darken-3"
          tile
          dark
          x-large
          to="/programas"
        >
          Ver paquetes
        </v-btn>
      </v-col> -->
    </v-row>
    <v-row>
      <v-col cols="12">
        <h4 class="brand__text text-center font-weight-medium lh">
          Incluye tu cuenta en plataforma Trainning Peaks <br>
          <strong >*Pago único</strong>
        </h4>
      </v-col>
      <v-col cols="12">
        <UiPackageTable/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeProgramas',
  props: {
    button: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.subtitle {
  color: $primary;
  letter-spacing: 0.8rem;
  font-size: 65%;
}
.lh {
  line-height: 1.3;
}
.lh_c {
  line-height: 0.8;
}
</style>
