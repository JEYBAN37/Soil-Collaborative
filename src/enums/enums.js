export const generos = [
  { valor: 'M', nombre: 'Masculino' },
  { valor: 'F', nombre: 'Femenino' },
  { valor: 'O', nombre: 'Otro' }
]

export const etnia = [
  { valor: 'A', nombre: 'Afrodescendiente' },
  { valor: 'I', nombre: 'Indígena' },
  { valor: 'R', nombre: 'Raizal' },
  { valor: 'P', nombre: 'Palenquero' },
  { valor: 'G', nombre: 'Gitano' },
  { valor: 'N', nombre: 'Ninguna' }
]

export const tipoDocumento = [
  { valor: 'C', nombre: 'Cédula' },
  { valor: 'E', nombre: 'Cédula extranjera' },
  { valor: 'P', nombre: 'Pasaporte' }
]

export const condicion = [
  { valor: 'D', nombre: 'Desplazamiento' },
  { valor: 'V', nombre: 'Victima' },
  { valor: 'O', nombre: 'Otra' },
  { valor: 'N', nombre: 'Ninguna' }
]

export const tipoActividad = [
  { valor: 'A', nombre: 'Agricultura' },
  { valor: 'R', nombre: 'Artesania' },
  { valor: 'M', nombre: 'Mineria' },
  { valor: 'G', nombre: 'Gobierno' },
  { valor: 'T', nombre: 'Transporte' },
  { valor: 'C', nombre: 'Comercio' },
  { valor: 'E', nombre: 'Educacion' },
  { valor: 'U', nombre: 'Turismo' },
  { valor: 'I', nombre: 'Independiente' },
  { valor: 'O', nombre: 'Otro' }
]

export const tipoPredio = [
  { valor: 'P', nombre: 'Privada' },
  { valor: 'C', nombre: 'Comunal' },
  { valor: 'LA', nombre: 'Libre Acceso' },
  { valor: 'E', nombre: 'Estatal' }
]

export const tipoPosesionCultivo = [
  { valor: 'T', nombre: 'Total' },
  { valor: 'F', nombre: 'Fraccionada' },
  { valor: 'A', nombre: 'Asociacion' },
  { valor: 'R', nombre: 'Arrendada' }
]

export const getNombre = (valor, lista) => {
  const item = lista.find(item => item.valor === valor)
  return item ? item.nombre : ''
}
