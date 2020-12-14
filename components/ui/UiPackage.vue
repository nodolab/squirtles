<template>
  <div class="text-center">
    <h1 class="price">{{ price }}</h1>
    <h3>
      <slot></slot>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'Package',
  props: {
    price: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.price {
  font-weight: 700;
  font-size: 3rem;
  color: $primary;
}
</style>
