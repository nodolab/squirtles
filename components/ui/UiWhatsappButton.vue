<template>
  <v-btn
    x-large
    :outlined="outlined"
    color="#7bdb8e"
    height="60"
    class="whatsapp_button"
    :class="{ 'tile': tile }"
    :block="block"
  >
    <v-icon large class="mr-3">mdi-whatsapp</v-icon>
    <span :class="{ 'white--text': outlined }">
      Envianos WhatsApp
    </span>
  </v-btn>
</template>

<script>
export default {
  props: {
    tel: {
      type: String,
      default: ''
    },
    outlined: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    tile: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.whatsapp_button {
  text-transform: none;
  border-radius: 15px;
  &.tile {
    border-radius: 0;
  }
}
</style>
