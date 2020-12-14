import Vue from 'vue'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
import { Swiper as SwiperClass, Autoplay, EffectFade } from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
import 'swiper/swiper-bundle.css'
SwiperClass.use([Autoplay, EffectFade])

Vue.use(getAwesomeSwiper(SwiperClass))
// Vue.use(VueAwesomeSwiper)
