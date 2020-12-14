<template>
  <v-container>
    <h2 class="section_title text-center mb-10">[TESTIMONIOS]</h2>
    <h2 class="display-1 font-weight-medium text-center mb-12">
      Solos logramos poco... ¡Juntos podemos todo!
    </h2>
    <v-row>
      <v-col
        v-for="({ img, name, dicipline, text }, index) in items" :key="index"
        cols="6"
        md="4"
        class="px-8"
      >
        <UiTestimonio
          :img="img"
          :name="name"
          :dicipline="dicipline"
          :text="text"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeTestimonios',
  data () {
    return {
      items: [
        {
          img: '/img/testimonio01.jpg',
          name: 'Paola Pacheco',
          dicipline: 'TRIATLONISTA',
          text: 'Squirtles me ha apoyado para superarme cada día. He logrado clasificar al mundial de Rotterdam 2017 y Suiza 2019, ademas de dos veces al...'
        },
        {
          img: '/img/testimonio02.jpg',
          name: 'Lorena Bores',
          dicipline: 'TRIATLONISTA',
          text: 'Squirtles me ha apoyado para superarme cada día. He logrado clasificar al mundial de Rotterdam 2017 y Suiza 2019, ademas de dos veces al...'
        },
        {
          img: '/img/testimonio03.jpg',
          name: 'Leonor García',
          dicipline: 'TRIATLONISTA',
          text: 'Para mí tus enseñanzas de cómo entrar al mar en los triatlones fue algo espectacular para mí y también la forma de nadar gracias a ti he mejorado mucho...'
        }
      ]
    }
  }
}
</script>
