<template>
  <v-container>
    <v-row justify="center" class="mb-10">
      <v-col cols="10" md="10">
        <h2 class="section_title text-center mb-12">[PROGRAMAS]</h2>
        <h2 class="display-2 font-weight-medium text-center mb-12 lh_c">
          Promoción de entrenamientos <br>
          <small class="subtitle">TEMPORADA 2020</small>
        </h2>
      </v-col>
      <v-col cols="6">
        <UiPackage
          price="$6,000*"
        >
          POR UN AÑO DE <br> ENTRENAMIENTO TRIATLÓN
        </UiPackage>
      </v-col>
      <v-col cols="6">
        <UiPackage
          price="$4,000*"
        >
          POR UN AÑO DE ENTRENAMIENTO <br> EN DISCIPLINA INDIVIDUAL
        </UiPackage>
      </v-col>
      <v-col cols="12">
        <h2 class="brand__text text-center font-weight-medium mt-12 lh">
          Incluye tu cuenta en plataforma Trainning Peaks <br>
          <strong>*Pago único</strong>
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2 class="display-1 font-weight-medium text-center mb-4">
          Costos y paquetes de nuestros servicios
        </h2>
      </v-col>
      <v-col cols="12">
        <UiPackageTable/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeProgramas'
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
