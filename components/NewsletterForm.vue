<template>
  <v-form ref="form" lazy-validation @submit.prevent="save">
    <v-row>
      <v-col>
        <v-text-field
          label="E-mail"
          hide-details
          solo
          tile
          background-color="#efefef"
        />
      </v-col>
      <v-col cols="3">
        <v-btn
          outlined
          block
          height="100%"
          color="#dedede"
        >
          REGÍSTRATE
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: 'NewsletterForm',
  methods: {
    save () {
      console.log('subscribe')
    }
  }
}
</script>

<style>

</style>
