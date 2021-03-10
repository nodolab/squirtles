<template>
  <v-row>
    <v-col>
      <v-expansion-panels
        popout
      >
        <v-expansion-panel
          v-for="({concepto, descripcion, precio, precioType, precioSq}, i) in items"
          :key="i"
        >
          <v-expansion-panel-header
            color="grey lighten-4"
            class="text-center"
          >{{ concepto.toUpperCase() }}</v-expansion-panel-header>
          <v-expansion-panel-content class="pt-5 pb-2">
            <p>{{ descripcion }}</p>
            <v-row class="text-center" align="end">
              <v-col>
                <small class="mb-2 d-inline-block">Normal</small>
                <h2 class="price">
                  {{ precio }} <br>
                  <small>
                    {{ precioType }}
                  </small>
                </h2>
              </v-col>
              <v-col v-if="precioSq">
                <small class="mb-2 d-inline-block">Miembro Squirtle</small>
                <h2 class="price">
                  {{ precioSq }}
                </h2>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'UiPackageList',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.price {
  line-height: 0.7;
  color: $primary;
  // font-weight: 800;
  font-size: 2em;
  small {
    font-size: 1rem;
    font-weight: 400;
    color: #111;
  }
}
</style>
