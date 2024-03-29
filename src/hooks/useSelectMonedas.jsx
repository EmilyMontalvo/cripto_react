import {useState} from 'react'
import styled from '@emotion/styled'


const Label = styled.label`
    color: #fff;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
    `
     const Select = styled.select`
     width: 100%;
     font-size: 18px;
     padding: 14px;
     border-radius: 10px;
     `

const useSelectMonedas = (label, opciones) => { //recibo el valor incial
    
    const [state, setState] = useState('')
    
  const SelectMonedas = () => (
        <>
        <Label>{label}</Label> {/*Imprimo el valor inicial label  */}
        <Select value={state} onChange={e => setState(e.target.value)}>   {/*uso setState para que cuando se seleccione una opcion value tenga su valor  */}
            <option>--Seleccione--</option>
            {
                opciones.map(opcion => (
                    <option key={opcion.id} value={opcion.id}> {opcion.nombre} </option> //imprimo las diferentes opciones de moneda
                ))
            }
        </Select>
        </>
  )
  return [state, SelectMonedas] //Retorno la opcion que se selecciono
  // Un hook te puede retornar un objeto o un arreglo
}

export default useSelectMonedas
