<template>
  <div>
    <v-container class="page_wrapper mb-12">
      <v-row tag="section">
        <v-col cols="12">
          <h2 class="display-1 font-weight-medium text-center my-12">
            Costos y paquetes de nuestros servicios
          </h2>
        </v-col>
        <v-col cols="12">
          <UiPackageTable/>
        </v-col>
      </v-row>
    </v-container>
    <section class="grey lighten-5 py_section">
      <HomeProgramas :button="false"/>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Programas'
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
