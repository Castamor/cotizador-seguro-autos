import { useContext, useRef } from "react";
import { CotizadorContext } from "../context/CotizadorProvider";

const Resultados = () => {

    const {datos, resultado} = useContext(CotizadorContext)

    const marcaRef = useRef(datos.marca)
    const añoRef = useRef(datos.año)
    const planRef = useRef(datos.plan)

    return (
        <aside className="mt-5 md:mt-0 md:col-start-2 md:col-end-4">
            <div className='w-full md:w-3/5 mx-auto'>
                <h3 className='text-gray-400 font-bold text-xl md:text-3xl'>Resumen</h3>
                <p className='font-bold md:text-xl'>
                    Marca: <span className='font-normal'>{marcaRef.current}</span></p>
                <p className='font-bold md:text-xl'>
                    Año: <span className='font-normal'>{añoRef.current}</span></p>
                <p className='font-bold md:text-xl'>
                    Plan: <span className='font-normal'>{planRef.current}</span></p>

                <p className='text-xs text-end md:text-base font-bold'>Total a pagar:</p>
                <p className='text-2xl text-end md:text-3xl font-black'>{resultado}</p>
            </div>
        </aside>
    );
}

export default Resultados;