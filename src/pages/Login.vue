<template>
	<v-container>
		<v-row class="d-flex justify-center">
			<v-col cols="10" md="6">
				<v-form class="mt-5" @submit.prevent="submit" id="form-login">

					<div class="text-h6 text-center my-5">Iniciar sesión en tu cuenta de alumni UTEQ</div>

					<v-text-field

						outlined
						dense
						label="Correo electronico"
						type="email"
						v-model="form.email"
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
						<v-btn :disabled="!form.terms" :loading="cargando" type="submit" block color="primary" form="form-login">Iniciar sesión</v-btn>
					</div>
				</v-form>

			</v-col>
		</v-row>
	</v-container>
</template>

<script>

import { mapActions } from 'vuex'

export default {
	name: 'Login',
	data() {
		return {
			form: {
				email: 'admin@gmail.com',
				password: 'facil',
				terms: false
			},
			emailRules: [
        v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Correo valido'
      ],
			cargando: false,
		}
	},
	methods: {
		...mapActions(['signIn']),
		async submit() {
			this.cargando = true
			let ok = await this.signIn({
				email: this.form.email,
				password: this.form.password
			})

			if (ok) {
				this.$router.push('/feed')
			}
			this.cargando = false
		}
	}
}
</script>

<style>

</style>
