<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <!-- <h2 class="section_title text-center mb-12">[PROGRAMAS]</h2> -->
        <h2 class="display-2 font-weight-medium text-center lh_c">
          Promoción de entrenamientos <br>
          <small class="subtitle">TEMPORADA 2020</small>
        </h2>
      </v-col>
    </v-row>
    <v-row justify="center" class="my-12">
      <v-col cols="12" sm="5">
        <UiPackage
          price="$6,000*"
        >
          POR UN AÑO DE <br> ENTRENAMIENTO TRIATLÓN
        </UiPackage>
      </v-col>
      <v-col cols="12" sm="5">
        <UiPackage
          price="$4,000*"
        >
          POR UN AÑO DE ENTRENAMIENTO <br> EN DISCIPLINA INDIVIDUAL
        </UiPackage>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h4 class="brand__text text-center font-weight-medium lh">
          Incluye tu cuenta en plataforma Trainning Peaks <br>
          <strong >*Pago único</strong>
        </h4>
      </v-col>
      <v-col cols="12">
        <UiPackageList :items="packages" class="d-block d-sm-none"/>
        <UiPackageTable :items="packages" class="d-none d-sm-block"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeProgramas',
  props: {
    button: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      packages: [
        {
          concepto: 'Inscripción anual al equipo',
          descripcion: 'Cuota de afiliación al equipo que te incluye una playera del equipo y descuentos como miembro del equipo',
          precio: '$400',
          precioType: 'anual',
          precioSq: ''
        },
        {
          concepto: 'Plan de Entrenamiento de 1 disciplina',
          descripcion: 'Entrenamientos en la plataforma de Trainning Peaks para Natación, Ciclismo o Carrera',
          precio: '$400',
          precioType: 'p/mes',
          precioSq: ''
        },
        {
          concepto: 'Plan de Entrenamiento de Triatlon o 2 disciplinas',
          descripcion: 'Entrenamientos en la plataforma de Trainning Peaks para Natación, Ciclismo y Carrera',
          precio: '$600',
          precioType: 'p/mes',
          precioSq: ''
        },
        {
          concepto: 'Plan de Entrenamiento Personalizado de 1 disciplina',
          descripcion: 'Entrenamientos en la plataforma de Trainning Peaks para Natación, Ciclismo o Carrera',
          precio: '$800',
          precioType: 'p/mes',
          precioSq: ''
        },
        {
          concepto: 'Plan de Entrenamiento de Triatlon o 2 disciplinas',
          descripcion: 'Entrenamientos en la plataforma de Trainning Peaks para Natación, Ciclismo y Carrera',
          precio: '$1,200',
          precioType: 'p/mes',
          precioSq: ''
        },
        {
          concepto: 'Video Análisis de Técnica de Natación',
          descripcion: 'Grabación sub acuática de tu técnica de natación, detección de errores y ejercicios de corrección',
          precio: '$500',
          precioType: '',
          precioSq: '$250'
        },
        {
          concepto: 'Video Análisis de Técnica de Carrera',
          descripcion: 'Grabación de tu técnica de carrera, detección de errores y ejercicios de corrección',
          precio: '$500',
          precioType: '',
          precioSq: '$250'
        },
        {
          concepto: 'Prueba de FTP en ciclismo',
          descripcion: 'Prueba para indentificar tu umbral de potencia en ciclismo.',
          precio: '$500',
          precioType: '',
          precioSq: '$250'
        },
        {
          concepto: 'Prueba de esfuerzo en banda para zonas de entrenamiento',
          descripcion: '',
          precio: '',
          precioType: '',
          precioSq: ''
        },
        {
          concepto: 'Pruebas de campo para medir umbrales de lactato',
          descripcion: '',
          precio: '',
          precioType: '',
          precioSq: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.subtitle {
  color: $primary;
  letter-spacing: 0.5rem;
  font-size: 65%;
  @media screen and ($tablet) {
    letter-spacing: 0.8rem;
  }
}
.lh {
  line-height: 1.3;
}
.lh_c {
  line-height: 0.8;
}
.display-2 {
  @media screen and ($mobile) {
    font-size: 2rem!important;
  }
}
</style>
