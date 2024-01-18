import React from 'react'
import styled from '@emotion/styled'

const Texto = styled.div`
background-color: red;
color: #fff;
padding: 8px;
font-size: 15px;
text-transform: uppercase;
font-family: 'Lato', sans-serif;
font-weight: 600;
text-align: center;
margin-top: 30px;
`

const Error = ({children}) => {
  return (
    <Texto>
        {children}     
    </Texto>
  )
}

export default Error
