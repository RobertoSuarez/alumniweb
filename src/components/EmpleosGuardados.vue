<template>
    <!-- En esta pagina van a esta los empleos que he guardados y los que he solicitado -->
    <div>
    <v-card>
        <v-card-title>Mis Empleos</v-card-title>
        <v-card-actions class="ml-2">
            <v-chip 
                class="mr-3"
                link
                v-for="(chip, index) in chips" 
                :key="index" 
                @click="seleccionar(chip.name)"
                :color="dato === chip.name ? 'primary': ''"
            >
                {{ chip.name }}
            </v-chip>
        </v-card-actions>
    </v-card>
    <EmpleoList class="mt-3" :ofertas="empleos" :masEmpleo="false"></EmpleoList>
    </div>
</template>

<script>
import EmpleoList from './EmpleoList.vue'
import { mapActions } from 'vuex'
export default {
    name: 'EmpleosGuardados',
    components: { EmpleoList },
    data() {
        return {
            chips: [
                {
                    name: 'Guardado',
                },
                {
                    name: 'Aplicado',
                }
            ],
            dato: '',
            empleos: null,
        }
    },
    mounted() {
        this.seleccionar('Guardado')
    },
    methods: {
        ...mapActions('empleos', ['misEmpleosGuardados', 'misEmpleosAplicados']),
        async seleccionar(item) {
            this.dato = item
            if (item === 'Guardado') {
                this.empleos = await this.misEmpleosGuardados()
            } else if (item === 'Aplicado') {
                //console.log('Empleos aplicados')
                this.empleos = await this.misEmpleosAplicados()
            }

        }
    }
}
</script>

<style>

</style>