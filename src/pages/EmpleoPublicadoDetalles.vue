<template>
  <div>
      Todos los detalles de un empleo
  </div>
</template>
<script>

import { mapActions } from 'vuex'
export default {
    name: 'EmpleoPublicadoDetalles',
    mounted() {
        const traerEmpleo = async () => {
            let empleo = await this.getEmpleoEmpleoByID(1)
            console.log(empleo)
        }

        traerEmpleo()
    },
    methods: {
        ...mapActions('empleos', ['getEmpleoEmpleoByID'])
    }
}
</script>

<style>

</style>