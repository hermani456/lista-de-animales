// Creando la clase padre Propietario
class Propietario {
	constructor(nombre, direccion, telefono) {
		this._nombre = nombre
		this._direccion = direccion
		this._telefono = telefono
	}
 // Getters y Setters
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
 // Método
	datosPropietario() {
		return `El nombre del dueño es: ${this.nombre}.El domicilio es: ${this.direccion} y el numero telefonico de contacto es: ${this.telefono}`
	}
}

// Clase Hija Animal
class Animal extends Propietario {
	constructor(nombre, direccion, telefono, tipo) {
		super(nombre, direccion, telefono)
		this._tipo = tipo
	}
  // Getter
	get tipo() {
		return this._tipo
	}
}

// Clase Nieta
class Mascota extends Animal {
	constructor(nombre, direccion, telefono, tipo, nombreM, enfermedad) {
		super(nombre, direccion, telefono, tipo)
		this._nombreM = nombreM
		this._enfermedad = enfermedad
	}

 // Getters y Setters 
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

// Funciones que acortan el llamado de los ID del DOM y sus valores
const getSelectorById = id => document.querySelector(id)
const getValueById = id => getSelectorById(id).value

// Seleccion de elementos del DOM
const form = getSelectorById("#form")
const resultado = getSelectorById("#resultado")

// funcion que limpia los datos del doom
const limpiarDom = item => {
	item.reset()
}

// funcion que muestra los datos ingrasados en listas bajo el formulario
const muestraDatos = animalito => {
	const a = document.createElement('li')
	const b = document.createElement('li')
	a.innerHTML = `${animalito.datosPropietario()}`
	b.innerHTML = `El tipo de animal es un: ${
		animalito.tipo
	}, mientras que el nombre de la mascota es: ${
		animalito.nombreM
	} y la enfermedad es: ${animalito.enfermedad}`
	resultado.appendChild(a)
	resultado.appendChild(b)
}

// Funcion de registro
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
		muestraDatos(gato)
	} else if (tipo === "perro") {
		const perro = new Mascota(
			propietario,
			direccion,
			telefono,
			tipo,
			nombreMascota,
			enfermedad
		)
		muestraDatos(perro)
	} else {
		const conejo = new Mascota(
			propietario,
			direccion,
			telefono,
			tipo,
			nombreMascota,
			enfermedad
		)
		muestraDatos(conejo)
	}
	limpiarDom(form)
}
form.addEventListener("submit", registrando)
