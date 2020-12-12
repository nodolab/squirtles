/**
 * Naming .client.js en caso de usar SSR, si se usara static con .js basta
 * https://medium.com/swlh/nuxt-creating-custom-directives-for-static-srr-sites-bf287f0cb6bb
 */
import Vue from 'vue'

const observer = new IntersectionObserver((entries, observer) => {
  // const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('has_transition')
      // setTimeout(() => {
      //   observer.unobserve(entry.target)
      // }, 100)
    } else {
      entry.target.classList.remove('has_transition')
    }
  })
}, { rootMargin: '-120px' })

Vue.directive('animate', {
  bind: (el) => {
    // console.log(binding)
    el.classList.add('before_enter')
    observer.observe(el)
  }
})
