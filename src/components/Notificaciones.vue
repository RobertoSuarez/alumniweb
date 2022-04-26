<template>
	<v-menu offset-y left>

		<template v-slot:activator="{ on, attrs }">
			<div class="mr-3">

				<v-btn icon v-on="on" v-bind="attrs">
					<v-badge
						color="warning"
						overlap dot
					>
						<v-icon>far fa-bell</v-icon>
					</v-badge>
				</v-btn>
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
