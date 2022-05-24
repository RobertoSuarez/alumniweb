<template>
  
    <v-card>
      <v-card-title>Empleos anunciados</v-card-title>
      <v-divider></v-divider>
      
      <v-list three-line>
        <v-list-item 
          v-for="(publicado, index) in publicados" 
          :key="index" 
          link 
          :to="{name: 'publicado-detalles', params: {id: publicado.id }}"
        >
        
          <v-list-item-avatar size="70">
            <v-img :src="publicado.img"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ publicado.titulo }}</v-list-item-title>
            <v-list-item-subtitle>{{ publicado.ciudad.Nombre}}</v-list-item-subtitle>
            <v-list-item-subtitle>{{ publicado.activo ? 'Si se aceptan solicitudes' : 'No se aceptan solicitudes' }}</v-list-item-subtitle>
            <v-list-item-subtitle>{{ publicado.solicitudes }} solicitudes</v-list-item-subtitle>

          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon>
              <v-icon>fas fa-ellipsis-h</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>    
  
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'EmpleosPublicados',
    mounted() {
      this.getEmpleosPublicados()
    },
    data() {
      return {
        // publicados: [
        //   {
        //     titulo: 'Desarrollador de software, React js',
        //     ciudad: 'Quevedo',
        //     estado: 'Activo',
        //     solicitudes: 124,
        //     img: 'https://gestionpyme.com/wp-content/uploads/2015/09/shutterstock_227788621.jpg',
        //   },
        //   {
        //     titulo: 'Desarrollador de software, React js',
        //     ciudad: 'Quevedo',
        //     estado: 'Activo',
        //     solicitudes: 124,
        //     img: 'https://www.dommia.com/img/portfolio/145/Foto/1604898167/wow-gava-identidad-corporativa.png',
        //   }
        // ]
      }
    },
    methods: {
      ...mapActions('empleos', ['getEmpleosPublicados'])
    },
    computed: {
      ...mapState('empleos', ['publicados'])
    }
}
</script>

<style>

</style>