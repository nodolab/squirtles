<template>
  <table>
    <thead>
      <tr>
        <th>CONCEPTO</th>
        <th>DESCRIPCIÓN</th>
        <th>PRECIO NORMAL</th>
        <th>MIEMBRO SQUIRTLE</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="({ concepto, descripcion, precio, precioType, precioSq }, index) in items" :key="index">
        <td>{{ concepto }}</td>
        <td>{{ descripcion }}</td>
        <td>
          {{ precio }} <br>
          <small>{{ precioType }}</small>
        </td>
        <td>{{ precioSq }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'PackageTable',
  data () {
    return {
      items: [
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
table {
  border-collapse: collapse;
  th, td {
    text-align: center;
    padding: 1.5rem 1rem;
    border: 2px solid $primary;
    &:nth-child(1) {
      width: 25%;
      border-left: none;
    }
    &:nth-child(2) {
      width: 35%;
    }
    &:nth-child(3) {
      font-weight: 600;
      width: 20%;
    }
    &:nth-child(4) {
      font-weight: 600;
      width: 20%;
      border-right: none;
    }
  }
  td:nth-child(3),
  td:nth-child(4) {
    line-height: 1;
    font-size: 2rem;
    small {
      font-weight: 500;
      font-size: 70%;
    }
  }
  th {
    padding: 1rem;
  }
}
</style>
