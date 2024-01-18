import styled from '@emotion/styled'
import ImagenCripto from './img/imagen-criptos.png'
import Formulario from '../components/Formulario'

function App() {

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
        <Formulario></Formulario>
      </div>
         
    </Contenedor>  
    </>
  )
}

export default App
