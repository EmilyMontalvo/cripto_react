import styled from '@emotion/styled'
import ImagenCripto from './img/imagen-criptos.png'
import Formulario from '../components/Formulario'
import { useEffect, useState } from 'react'
import Resultado from '../components/Resultado'
import Spinner from '../components/Spinner'

//Defino  el styled component para un h1. Siempre con StringTemplate y defino el disenio
  //npm i @emotions/react @emotion/styled Para instalar
  const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media(min-width:992px){
    display:grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
  }
  `
  const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color:#FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
  `
  const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto o auto;
  display: block;
  `

function App() {

  const [monedas, setMonedas] = useState({}) //Necesito las monedasSeleccionadas, entonces mando el set monedas a Formulario y moneda ya tiene un valor 
  
  const [resultado, setResultado] = useState({})

  const [laoding, setLoading] = useState(false) //State para mostrar carga

  useEffect (()=>{
    
    if(Object.keys(monedas).length>0){ //Verificamos que hay algo en el objeto
      
      const cotizarCripto = async () =>{
        setLoading(true)
        setResultado({}) //Reseteo la info para que desaparezca mientras esta el Spinner
        console.log(monedas)
        const {monedaSeleccionada, criptomonedaSeleccionada} = monedas //Objet Destructuring, se pone el mismo nombre.
        console.log(monedaSeleccionada)
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomonedaSeleccionada}&tsyms=${monedaSeleccionada}` //CON TEMPLATE STRING
        const response = await fetch(url)
        const resultado = await response.json()

        setResultado(resultado.DISPLAY[criptomonedaSeleccionada][monedaSeleccionada]) //Pongo los corchetes para que la busqueda en el JSON sea dinamica. 
        setLoading(false)
      }

      cotizarCripto()  
    }
    

  },[monedas]) //Cada vez que se cambie el valor de las monedas seleccionadas

  

  return (
    <>
    {/* Utilizo el Style Component creado */}
    <Contenedor>
      <Imagen
      src={ImagenCripto}
      alt='imagenes criptomonedas'
      />
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>    
        <Formulario
          setMonedas = {setMonedas}
        />
        {laoding && <Spinner/> }
        {/* Verificamos si hay un resultado especifico, y si lo hay mandamos por props a Resultado */}
        {Object.keys(resultado).length !== 0 && <Resultado resultado = {resultado} />} 
        
      </div>
         
    </Contenedor>  
    </>
  )
}

export default App
