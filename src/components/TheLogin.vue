<template>

	<v-card
		class="pa-5"
		width="400px">
		<v-card-title class="text-h4">INICIAR SESIÓN</v-card-title>


		<v-card-text>

			<v-alert
				:value="showAlertaError"
				border="top"
				color="red"
				type="error"
				transition="scale-transition"
			>
				Credenciales incorrectas
			</v-alert>
			<v-form @submit.prevent="iniciarSesion">

				<v-text-field
					class="my-2"
					label="Correo electronico"
					v-model="form.email"
					:rules="emailRules"
					required
					outlined
					hide-details>
				</v-text-field>

				<v-text-field
					class="my-2"
					hide-details
					v-model="form.password"
					label="Contraseña"
					:type="passwordShow ? 'text' : 'password'"
					:append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
					@click:append="passwordShow = !passwordShow"
					outlined >
				</v-text-field>
				<v-btn
					type="submit"
					:loading="cargando"
					color="primary"
					x-large
					block>
					Iniciar Sesión
				</v-btn>
			</v-form>

			<p class="mt-2">No tienes cuenta? <a class="green--text" @click.prevent="registrar('registrar')">Crear cuenta</a></p>

		</v-card-text>

	</v-card>

</template>

<script>
import { mapActions } from 'vuex'


export default {
	name: 'TheLogin',
	props: {
		registrar: {
			type: Function,
		}
	},
	data() {
		return {
			showAlertaError: false,
			cargando: false,
			passwordShow: false,
			form: {
				email: '',
				password: '',
			},
			emailRules: [
        v => !!v || 'El correo es requerido',
        v => /.+@.+/.test(v) || 'El correo es invalido',
      ],
		}
	},
	methods: {
		...mapActions(['signIn']),
		async iniciarSesion() {
			this.showAlertaError = false
			this.cargando = true

			const ok = await this.signIn({
				email: this.form.email,
				password: this.form.password,
			})

			if (ok) {
				this.$router.push({
					name: 'feed'
				})
			} else {
				this.showAlertaError = true
			}

			console.log(ok)
			this.cargando = false
		}
	}

}
</script>

<style>

</style>
