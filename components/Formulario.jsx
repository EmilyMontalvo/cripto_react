import {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../src/hooks/useSelectMonedas'
import { monedas } from '../src/data/monedas'
import Error from './Error'

const Formulario = (setMonedas) => {

    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)
    //Importo hoook personalizado y le mando un valor inicial junto con la data
    const [monedaSeleccionada, SelectMonedas] = useSelectMonedas('Eligen tu moneda', monedas) 
    const [criptomonedaSeleccionada, SelectCriptomonedas] = useSelectMonedas('Elige tu Criptomoneda', criptos) //Reutilizo la funcion para criptomonedas

    useEffect(() => { //Se consulta una sola vez al principio cuando el documento esta listo
       const consultarAPI = async () => { 
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
            const respuesta = await fetch(url) //FetchAPI, se utiliza para consultar APIs
            const resultado = await respuesta.json() //Transformo el resultado a JSON
            
            //Construimos la data con lo que necesitamos
            const dataAPICriptos = resultado.Data.map( cripto => {  //Itero sobre resultado.Data que tiene las monedas
                const objeto = {id: cripto.CoinInfo.Name, nombre: cripto.CoinInfo.FullName} //Seleccionamos la info especifica
                return objeto //retorno los objetos
            })
            setCriptos(dataAPICriptos)
       }
       consultarAPI() //Ejecutar
    }, [])


    const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;
    &:hover{
        background-color: #7a7dfe;
        cursor: pointer;
    }
    `

    const handleSubmit = e => {
        e.preventDefault() //evitar que la página se recargue cuando se envía un formulario
        if([monedaSeleccionada, criptomonedaSeleccionada].includes('')){ //Hago un arreglo de moneda y criptonomeda seleciconada 
                                                            // busco si alguna tine un string vacio
            setError(true)
            return
        }
        setError(false)
        setMonedas({monedaSeleccionada, criptomonedaSeleccionada})
    }

  return (
    <>
    
    <form
    onSubmit={handleSubmit}
    >
        <SelectMonedas/>
        <SelectCriptomonedas/> 
        {/* Utilizo un componente con children para imprimir el Error */}
        {error && <Error>Todos los campos son obligatorios</Error> }
        <InputSubmit type="submit" value="Cotizar" />
    </form>
    </>
  )
  
}

export default Formulario
