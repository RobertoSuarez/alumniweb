<template>

	<v-card
		class="pa-5"
		width="500px">
		<v-card-title class="text-h4">Registrate</v-card-title>
		<v-card-subtitle>Saca el máximo partido a tu vida profesional</v-card-subtitle>

		<v-card-text>
			<v-alert
				:value="showAlertaLogin"
				border="top"
				color="primary"
				type="success"
				transition="scale-transition"
			>
				<v-row align="center">
					<v-col class="grow">
						Cuenta creada con éxito
					</v-col>
					<v-col class="shrink">
						<v-btn @click="() => { abrirModal('login') }" color="white" outlined>Iniciar sesión</v-btn>
					</v-col>
				</v-row>

			</v-alert>

			<v-alert
				:value="showAlertaError"
				border="top"
				color="red"
				type="error"
				transition="scale-transition"
			>
				{{ msgError }}
			</v-alert>

			<v-form @submit.prevent="registrarUsuario">
				<v-text-field
					v-model="form.email"
					:rules="emailRules"
					required
					outlined
					label="Correo electronico"
					hide-details
					>
				</v-text-field>

				<v-text-field
					v-model="form.password"
					outlined
					:type="passwordShow ? 'text' : 'password'"
					:append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
					@click:append="passwordShow = !passwordShow"
					class="my-2"
					label="Contraseña nueva"
					hide-details>
				</v-text-field>

				<v-text-field
					v-model="form.passwordConfir"
					:type="passwordConfirShow ? 'text' : 'password'"
					:append-icon="passwordConfirShow ? 'mdi-eye' : 'mdi-eye-off'"
					@click:append="passwordConfirShow = !passwordConfirShow"
					outlined
					class="my-2"
					label="Confirmar contraseña"
					hide-details>
				</v-text-field>

				<v-select
					v-model="form.tipoCuenta"
					class="my-2"
					outlined
					hide-details
					label="Tipo de cuenta"
					:items="tiposCuentas"></v-select>

				<v-checkbox
					class="my-2"
					label="Acepta los terminos y condiciones">
				</v-checkbox>

				<v-btn
					color="primary"
					block
					x-large
					type="submit"
					:loading="cargando"
				>
					Crear cuenta
				</v-btn>
			</v-form>
		</v-card-text>
	</v-card>

</template>

<script>
import axios from '../plugins/axios'

export default {
	name: 'TheRegister',
	props: {
		abrirModal: {
			type: Function,
		}
	},
	data() {
		return {
			showAlertaLogin: false,
			cargando: false,
			tiposCuentas: ['admin', 'alumni'],
			passwordShow: false,
			passwordConfirShow: false,
			msgError: 'Error en el server',
			showAlertaError: false,
			form: {
				email: '',
				password: '',
				passwordConfir: '',
				tipoCuenta: '',
			},
			emailRules: [
        v => !!v || 'El correo es requerido',
        v => /.+@.+/.test(v) || 'El correo es invalido',
      ],
		}
	},
	methods: {
		async registrarUsuario() {
			this.cargando = true
			this.showAlertaError = false

			try {
				const response = await axios.post('/users', {
					email: this.form.email,
					password: this.form.password,
					roleCuenta: this.form.tipoCuenta,
					})

				console.log(response.data)
				if (response) {
					console.log('Se a registrado correctamente')
					this.showAlertaLogin = true
					this.limpiarFormulario()
				}
			}
			catch(e) {
				console.log(e)

				if (e.response) {
					console.log(e.response.data)
					this.msgError = e.response.data.mensaje
				}

				this.showAlertaError = true
			}



			this.cargando = false
		},
		limpiarFormulario() {
			this.form.email = ""
			this.form.password = ""
			this.form.passwordConfir = ""
			this.form.tipoCuenta = ""
		}
	},
}
</script>

<style>

</style>
