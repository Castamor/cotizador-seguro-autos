import useCotizador from './hooks/useCotizador';
import Error from './components/Error'
import Formulario from './components/Formulario';
import Resultados from './components/Resultados'

const App = () => {

    const { error, hayInfo } = useCotizador()
    
    return (
        <div>
            <header>
                <h1 className="text-yellow-500 text-center font-bold text-4xl">Cotizador de seguros de auto</h1>
            </header>

            <main className={hayInfo ? "bg-white w-fit mx-auto rounded-md mt-5 px-5 py-7 md:grid items-center md:grid-cols-3 md:p-5 relative" : "bg-white w-fit mx-auto rounded-md mt-5 px-5 py-7 relative"}>

                <Formulario />
                {hayInfo && <Resultados />}

            </main>

            {error && <Error>Los campos son obligatorios</Error>}
        </div>
    );
}

export default App;