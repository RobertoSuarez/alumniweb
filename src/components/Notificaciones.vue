<template>
	<v-menu offset-y left>

		<template v-slot:activator="{ on, attrs }">
			<div class="mr-3">

				<v-badge
					color="primary"
					overlap dot
				>

					<v-btn icon small v-on="on" v-bind="attrs">
						<v-icon size="25">far fa-bell</v-icon>
					</v-btn>
				</v-badge>
			</div>
		</template>

		<v-card width="400">
			<v-card-title>Notificaciones</v-card-title>
			<v-list>
				<v-list-item v-for="(noti, index) in notifis" :key="index" link>
					<v-list-item-title>{{ noti }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-card>
	</v-menu>
</template>

<script>
export default {
	name: 'Notificaciones',
	data() {
		return {
			notifis: ['Cuenta creada con exito', 'Empelo creado con exito', 'Varias personas aplicaron al trabajo que publicastes']
		}
	}
}
</script>

<style>

</style>
