class Propietario {
	constructor(nombre, direccion, telefono) {
		this._nombre = nombre
		this._direccion = direccion
		this._telefono = telefono
	}
	get nombre() {
		return this._nombre
	}
	set nombre(nombre) {
		this._nombre = nombre
	}
	get direccion() {
		return this._direccion
	}
	set direccion(direccion) {
		this._direccion = direccion
	}
	get telefono() {
		return this._telefono
	}
	set telefono(telefono) {
		this._telefono = telefono
	}
	datosPropietario() {
		return `El nombre del dueño es: ${this.nombre}.El domicilio es: ${this.direccion} y el numero telefonico de contacto es: ${this.telefono}`
	}
}

class Animal extends Propietario {
	constructor(nombre, direccion, telefono, tipo) {
		super(nombre, direccion, telefono)
		this._tipo = tipo
	}
	get tipo() {
		return this._tipo
	}
}

class Mascota extends Animal {
	constructor(nombre, direccion, telefono, tipo, nombreM, enfermedad) {
		super(nombre, direccion, telefono, tipo)
		this._nombreM = nombreM
		this._enfermedad = enfermedad
	}
	get nombreM() {
		return this._nombreM
	}
	set nombreM(nombre) {
		this._nombreM = nombre
	}
	get enfermedad() {
		return this._enfermedad
	}
	set enfermedad(enfermedad) {
		this._enfermedad = enfermedad
	}
}

const getSelectorById = (id) => document.querySelector(id)
const getValueById = (id) => getSelectorById(id).value

const form = document.querySelector("form")
const resultado = document.querySelector("#resultado")

const limpiarDom = (item) => {
	item.reset()
}

const registrando = (e) => {
	e.preventDefault()
	const propietario = getValueById("#propietario")
	const direccion = getValueById("#direccion")
	const telefono = getValueById("#telefono")
	const tipo = getValueById("#tipo")
	const nombreMascota = getValueById("#nombre-mascota")
	const enfermedad = getValueById("#enfermedad")
	//If y else para instans
	if (tipo === "gato") {
		const gato = new Mascota(
			propietario,
			direccion,
			telefono,
			tipo,
			nombreMascota,
			enfermedad
		)
		console.log("gatito creado")
		resultado.innerHTML = `<li>${gato.datosPropietario()}</li><li> El tipo de animal es un: ${
			gato.tipo
		}, mientras que el nombre de la mascota es: ${
			gato.nombreM
		} y la enfermedad es: ${gato.enfermedad}</li>`
	} else if (tipo === "perro") {
		const perro = new Mascota(
			propietario,
			direccion,
			telefono,
			tipo,
			nombreMascota,
			enfermedad
		)
		resultado.innerHTML = `<li>${perro.datosPropietario()}</li><li> El tipo de animal es un: ${
			perro.tipo
		}, mientras que el nombre de la mascota es: ${
			perro.nombreM
		} y la enfermedad es: ${perro.enfermedad}</li>`
	} else {
		const conejo = new Mascota(
			propietario,
			direccion,
			telefono,
			tipo,
			nombreMascota,
			enfermedad
		)
		resultado.innerHTML = `<li>${conejo.datosPropietario()}</li><li> El tipo de animal es un: ${
			conejo.tipo
		}, mientras que el nombre de la mascota es: ${
			conejo.nombreM
		} y la enfermedad es: ${conejo.enfermedad}</li>`
	}
	limpiarDom(form)
}
form.addEventListener("submit", registrando)
