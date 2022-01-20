<template>
	<v-container>
		<v-row class="d-flex justify-center">
			<v-col cols="10" md="8">
				<v-form>
					<div class="text-h6 text-center my-5">Crear una cuenta en alumni UTEQ</div>

					<!-- Datos basicos de la cuenta -->
					<v-row>
						<v-col cols="12" md="6">
							<v-select
								outlined
								dense
								persistent-hint
								label="Tipo de identificación"
								:items="['Cedula', 'Pasaporte', 'Licencia de conducir']"
							>

							</v-select>
						</v-col>

						<v-col cols="12" md="6">
							<v-text-field outlined dense label="Numero de identificación"></v-text-field>
						</v-col>


						<v-col cols="12" md="6">
							<v-text-field outlined dense label="Nombres"></v-text-field>
						</v-col>
						<v-col cols="12" md="6">
							<v-text-field outlined dense label="Apellidos"></v-text-field>
						</v-col>

						<v-col cols="12" md="6">
							<v-text-field outlined dense label="Correo electronico"></v-text-field>
						</v-col>
						<v-col cols="12" md="6">
							<v-text-field outlined dense label="Contraseña"></v-text-field>
						</v-col>

						<v-col cols="12">
							<v-select
								outlined
								dense
								label="Tipo de cuenta"
								:items="['Alumni', 'Administrador', 'Empresa']"
								v-model="tipoCuenta"
							></v-select>
						</v-col>
					</v-row>

					<!-- Datos especifico de una cuenta -->
					<div class="text-subtitle-1 mb-5" v-if="tipoCuenta != null">Datos especifico de un {{tipoCuenta}}</div>

					<v-row v-if="tipoCuenta === 'Alumni'">

						<v-col cols="12" md="6">
							<v-select outlined dense label="Carrera cursada" :items="['Ingeniria en software']"></v-select>
						</v-col>

						<v-col cols="12" md="6">
							<v-menu
								ref="menu"
								v-model="menu"
								:close-on-content-click="false"
								:return-value.sync="date"
								transition="scale-transition"
								offset-y
								min-width="auto">
								<template v-slot:activator="{ on, attrs }">
									<v-text-field
										outlined
										dense
										v-model="date"
										label="Fecha de graduación"
										prepend-icon="mdi-calendar"
										readonly
										v-bind="attrs"
										v-on="on"
									></v-text-field>
								</template>

								<v-date-picker
									v-model="date"
									no-title
									scrollable
									locale="ec"
								>
									<v-spacer></v-spacer>
									<v-btn
										text
										color="primary"
										@click="menu = false"
									>
										Cancelar
									</v-btn>
									<v-btn
										text
										color="primary"
										@click="$refs.menu.save(date)"
									>
										Hecho
									</v-btn>
								</v-date-picker>
							</v-menu>
						</v-col>

						<v-col cols="12" md="6">
							<v-select outlined dense label="Provincia" :items="['Los Rios', 'Manabi']"></v-select>
						</v-col>

						<v-col cols="12" md="6">
							<v-select outlined dense label="Ciudad" :items="['Quevedo', 'Buena fe']"></v-select>
						</v-col>


					</v-row >

					<v-row v-if="tipoCuenta === 'Empresa'">
						<v-col cols="12">
							<v-text-field outlined dense label="Nombre"></v-text-field>
						</v-col>
					</v-row>

					<v-row v-if="tipoCuenta === 'Administrador'">
						<v-col cols="12">
							<v-text-field outlined dense label="Area"></v-text-field>
						</v-col>
					</v-row>

					<v-btn block color="primary">Crear cuenta</v-btn>

				</v-form>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'Register',
	data() {
		return {
			tipoCuenta: null,
			menu: false,
			date: null,
		}
	}
}
</script>

<style>

</style>
