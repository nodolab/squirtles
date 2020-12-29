<template>
  <footer class="pt_section">
    <v-container>
      <v-row class="text-center white--text">
        <v-col>
          <p>
            Tel: 443 182 5004 <br>
            <a href="javascript:;">contacto@<span class="green--text">squirtlesteam</span>.com</a> <br>
            Cuitas 58095 Morelia, Michoacán de Ocampo, México
          </p>
          <div class="d-flex justify-center">
            <UiSocial/>
            <p class="d-inline-block mb-0">squirtlesteam</p>
          </div>
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
  position: relative;
  letter-spacing: 2px;
  background: $secondary;
  a {
    color: #FFF;
  }
}
</style>
