<template>
	<v-footer>
		<v-container>

			<v-row >
				<v-col cols="4">
					<div class="text-subtitle-2">Alumni UTEQ</div>
					<div class="text-caption">Ecuador - Quevedo</div>

					<div class="mt-4">
						<v-btn href="https://www.uteq.edu.ec/" target="_blank" class="mx-2" icon>
							<div class="d-flex align-center">
								<v-img
									alt="UTEQ Logo"
									contain
									src="@/assets/uteqlogo.png"
									width="20"
								/>
							</div>
						</v-btn>

						<v-btn href="https://www.facebook.com" target="_blank" class="mx-2" icon>
							<v-icon size="20" color="#3b5998">fab fa-facebook</v-icon>
						</v-btn>

						<v-btn href="https://ec.linkedin.com/" target="_blank" class="mx-2" icon>
								<v-icon size="20" color="#0e76a8">fab fa-linkedin-in</v-icon>
						</v-btn>

						<v-btn href="https://www.tiktok.com/es/" target="_blank" class="mx-2" icon>
								<v-icon size="20" color="#000">fab fa-tiktok</v-icon>
						</v-btn>

					</div>
				</v-col>

				<v-col cols="4">segun</v-col>
				<v-col cols="4">tercero</v-col>

			</v-row>
		</v-container>


		</v-footer>
</template>

<script>
export default {
	name: 'footer'
}
</script>

<style>
	.alumni-footer {
		height: 200px;
	}
</style>
