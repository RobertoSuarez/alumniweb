<template>
	<div>
		<v-btn
			to="/auth/login"
			outlined
			class="ma-2"
		>
			Inciar sesión
		</v-btn>

		<v-btn
			to="/auth/register"
			class="ma-2"
			color="primary">
			Registrarse
		</v-btn>
	</div>
</template>

<script>
export default {
	name: 'AlumniAuthButtons',

}
</script>

<style>

</style>
