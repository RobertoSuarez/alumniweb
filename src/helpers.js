export default {
	fechaRelativa: function (fecha) {
		if (!fecha) {
			return ''
		}
		const rtf = new Intl.RelativeTimeFormat("es-ES", {numeric: "auto"});
		const postDate = Date.parse(fecha)
		// convertimos todo a días
		const time = Number.parseInt((postDate - new Date()) / 1000 / 60 / 60 / 24)

		return rtf.format(time, "day")
	}
}
