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
  props: {
    items: {
      type: Array,
      default: () => []
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
