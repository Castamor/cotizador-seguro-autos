export const diferenciaAño = year => {
    return new Date().getFullYear() - year
}

export const incrementoMarca = marca => {

    let incremento = 0
    switch(marca) {
        case 'Europeo':
            incremento += 1.30
            break
        case 'Americano':
            incremento += 1.15
            break
        case 'Asiatico':
            incremento += 1.05
            break
    }

    return incremento
}

export const incrementoPlan = plan => {
    
    let incremento = 1
    switch(plan) {

        case "Básico":
            incremento = 1.20
            break

        case "Completo":
            incremento = 1.50
            break
    }

    return incremento
}

export const formatearDinero = cantidad => {
    return cantidad.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD'
	})
}