<template>
  <div class="card text-center py-12 px-4 elevation-1 h-100">
    <h1 class="price mb-3">{{ price }}</h1>
    <h4 class="mb-2 caption">
      <slot></slot>
    </h4>
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
.card {
  border-radius: 10px;
  background: #fefefe;
}
</style>
