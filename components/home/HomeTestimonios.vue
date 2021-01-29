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
          img: '/img/social02.jpg',
          name: 'Camy Figueroa',
          dicipline: 'TRIATLONISTA',
          text: 'Squirtles me ha apoyado para superarme cada día. He logrado clasificar al mundial de Rotterdam 2017 y Suiza 2019, ademas de dos veces al campeonato mundial de Xterra en Maui. Gracias al apoyo del coach realicé mi primer 70.3 y voy por el segundo este año.'
        },
        {
          img: '/img/testimonio02.jpg',
          name: 'Lorena Bores',
          dicipline: 'TRIATLONISTA',
          text: 'Gracias Alfonso Magaña, mi coach quien me inició y confió plenamente en mí desde mi primer paso en el triatlón me ha ayudado día a día a superar mis expectativas personales.'
        },
        {
          img: '/img/testimonio03.jpg',
          name: 'Leonor García',
          dicipline: 'TRIATLONISTA',
          text: 'Para mí tus enseñanzas de cómo entrar al mar en los triatlones fue algo espectacular y también la forma de nadar. Gracias a ti he mejorado mucho en la natación sobre todo en el crol y estoy muy muy agradecida por todos tus consejos y tus correcciones. Fue además un honor para mí que hubiéramos recibido el reconocimiento de la CONADE a nivel nacional y lo obtuvimos dos integrantes del equipo.'
        }
      ]
    }
  }
}
</script>
