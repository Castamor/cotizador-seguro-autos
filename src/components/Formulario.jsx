import { useContext } from 'react';
import { CotizadorContext } from '../context/CotizadorProvider' 
import { Marcas, Fechas, Planes } from '../data/index'

const Formulario = () => {

    const { validarFormulario, handleChangeDatos } = useContext(CotizadorContext)

    return (
        <form onSubmit={e => validarFormulario(e)} className="">

            <p className="text-gray-400 font-bold text-xl mb-1">Elige el modelo</p>
            <div className="flex flex-col gap-2.5 mb-4">

                <div className="flex items-center justify-between">
                    <label htmlFor="marca" className="font-bold">Marca:</label>
                    <select
                        name="marca" 
                        id="marca"
                        defaultValue={""}
                        className="ml-5 border border-gray-300 p-1 rounded-md"
                        onChange={e => handleChangeDatos(e)}
                    >
                        <option value="" disabled>-- Selecciona --</option>
                        {
                            Marcas.map( marca => (
                                <option 
                                    key={marca.id}
                                    value={marca.nombre}
                                >{marca.nombre}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="flex items-center justify-between">
                    <label htmlFor="año" className="font-bold">Año:</label>
                    <select
                        name="año" 
                        id="año"
                        defaultValue={""}
                        className="ml-5 border border-gray-300 p-1 rounded-md"
                        onChange={e => handleChangeDatos(e)}
                    >
                        <option value="" disabled>-- Selecciona --</option>
                        {
                            Fechas.map( fecha => (
                                <option 
                                    key={fecha}
                                    value={fecha}
                                >{fecha}</option>
                            ))
                        }
                    </select>
                </div>

            </div>

            <p className="text-gray-400 font-bold text-xl">Elige un plan</p>
            <div className="flex flex-wrap justify-around items-center mb-4">
                {
                    Planes.map( plan => (
                        <div key={plan.id} className='flex gap-1'>
                            <label htmlFor={plan.titulo}>{plan.titulo}</label>
                            <input 
                                type="radio"
                                name="plan" 
                                id={plan.titulo}
                                value={plan.titulo}
                                onChange={e => handleChangeDatos(e)}
                            />
                        </div>
                    ))
                }
            </div>

            <input type="submit" value="Cotizar" className="bg-yellow-500 hover:bg-yellow-600 hover:cursor-pointer transition-colors py-1 w-full text-center font-bold rounded"/>

        </form>
    );
}

export default Formulario;