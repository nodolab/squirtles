<template>
  <div class="text-center">
    <div class="thumb img_container">
      <img :src="img" alt="">
    </div>
    <div class="stars mb-2">
      <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 260 245">
        <path d="m55,237 74-228 74,228L9,96h240"/>
      </svg>
    </div>
    <h2 class="name mb-2">
      {{ name }}
    </h2>
    <div class="dicipline mb-4">
      <h4>
        {{ dicipline }}
      </h4>
    </div>
    <p class="testimonial">
      "{{ text }}"
    </p>
  </div>
</template>

<script>
export default {
  name: 'Testimonio',
  props: {
    img: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    dicipline: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.thumb {
  width: 80%;
  margin: 0 auto 1rem;
  border-radius: 50%;
  overflow: hidden;
}
.name {
  font-weight: 900;
  letter-spacing: 1px;
  font-size: 2rem;
  line-height: 1;
}
.icon {
  fill: #B2DF6D;
  width: 2rem;
  height: 2rem;
}
.dicipline {
  h4 {
    position: relative;
    display: inline-block;
    font-weight: 500;
    font-size: 1rem;
    padding: 0 1.7rem;
    letter-spacing: 4px;
    color: $primary;
    &::after, &::before {
      content: "";
      position: absolute;
      top: 0.6rem;
      width: 1rem;
      height: 0.1rem;
      background: $primary;
    }
    &::after {
      left: 0;
    }
    &::before {
      right: 0;
    }
  }
}
.testimonial {
  line-height: 1.5;
}
</style>
