<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-list>
          
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title> 
                <v-icon class="mr-3">fas fa-bookmark</v-icon> 
                Mis Empleos

              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link v-for="(opcion, index) in opciones" :key="index" :to="opcion.to">
            <v-list-item-title>{{ opcion.titulo}}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="9">
        <!-- mis empleos o anuncios que he publicado -->
        <router-view/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    name: 'MisEmpleos',
    data() {
      return {
        opciones: [
          {
            titulo: 'Empleos anunciados',
            to: { name: 'empleos-publicados'},
            icon: null,
          },
          {
            titulo: 'Mis empleos',
            to: { name: 'empleos-guardados'},
            icon: null,
          }
        ]
      }
    },
}
</script>

<style>

</style>