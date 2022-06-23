import styled from '@emotion/styled'
import React from 'react'

const MotivoContainer = styled.div`
margin: 1rem 0;
padding: 1rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 80vw;
background-color: #e43030;
border-radius: 5px;
color: #fdfced;
`;

const Motivo = ({motivo}) => {
  return (
    <MotivoContainer>
        <h3>
            Orden rechazada !!
        </h3>
        <span>
            <strong>Motivo </strong>: {motivo}
        </span>
        <small>En la grilla de abajo se verá destacado en rojo el paso rechazado.</small>
    </MotivoContainer>
  )
}

export default Motivo