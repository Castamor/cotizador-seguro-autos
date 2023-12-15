import { createContext, useState } from "react";
import { diferenciaAño, incrementoMarca, incrementoPlan, formatearDinero } from '../helpers'

export const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

    const [error, setError] = useState(false)
    const [resultado, setResultado] = useState('')
    const [hayInfo, setHayInfo] = useState(false)

    const [datos, setDatos] = useState({
        marca: '',
        año: '',
        plan: '',
    })

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const cotizarSeguro = () => {
        let resultado = 2000

        // Europeo: +30%, Americano: +15%, Asiatico: +5%
        resultado *= incrementoMarca(datos.marca)
        
        // Se le resta 3% cada año menos
        resultado -= ((diferenciaAño(datos.año) * 3) * resultado ) / 100

        // Básico: +20%, Completo: +50%
        resultado *= incrementoPlan(datos.plan)

        resultado.toFixed(2)
        return resultado = formatearDinero(resultado)
    }

    const validarFormulario = e => {
        e.preventDefault()

        if(Object.values(datos).includes('')) {
            setError(true)

            setTimeout(() => {
                setError(false)
            }, 4000);

            return
        }

        setError(false)
        setResultado(cotizarSeguro())
        setHayInfo(true)
    }

    return (
        <CotizadorContext.Provider
            value={{
                error,
                handleChangeDatos,
                validarFormulario,
                hayInfo,
                resultado,
                datos
            }}
        >
            {children}
        </CotizadorContext.Provider>
    );
}

export default CotizadorProvider;