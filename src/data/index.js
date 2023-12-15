export const Marcas = [
    {id: 1, nombre: 'Europeo'},
    {id: 2, nombre: 'Americano'},
    {id: 3, nombre: 'Asiatico'},
]

const fechaActual = new Date().getFullYear();
export const Fechas = Array.from(new Array(10), (_, i) => fechaActual - i)

export const Planes = [
    {id: 1, titulo: 'Básico'},
    {id: 2, titulo: 'Completo'},
]