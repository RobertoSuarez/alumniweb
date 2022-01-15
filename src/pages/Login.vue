<template>
	<v-container>
		<v-row class="d-flex justify-center">
			<v-col cols="10" md="6">
				<v-form class="mt-5" @submit.prevent="login" id="form-login">

					<div class="text-h6 text-center my-5">Iniciar sesión en tu cuenta de alumni UTEQ</div>

					<v-text-field

						outlined
						dense
						label="Nombre de usuario"
						type="email"
						v-model="form.username"
						:rules="emailRules"
						>
					</v-text-field>

					<v-text-field
						outlined
						dense
						label="Contraseña"
						v-model="form.password"
						type="password">
					</v-text-field>

					<v-checkbox v-model="form.terms" color="primary">
						<template v-slot:label>
							<div>
								<span>Acepta los </span>
								<a href="google.com" target="_blank">terminos y condiciones</a>
							</div>
						</template>
					</v-checkbox>


					<div class="d-flex justify-end">
						<v-btn :disabled="!form.terms" type="submit" block color="primary" form="form-login">Iniciar sesión</v-btn>
					</div>
				</v-form>

			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'Login',
	data() {
		return {
			form: {
				username: '',
				password: '',
				terms: false
			},
			emailRules: [
        v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Correo valido'
      ]
		}
	},
	methods: {
		login() {
			if (this.form.terms) {
				console.log(`Inicio de sesión exitoso: ${this.form.username} ${this.form.password} ${this.form.terms}`)
			}

		}
	}
}
</script>

<style>

</style>
