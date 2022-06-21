import styled from '@emotion/styled'
import React from 'react'
import AprobacionClient from '../../../../core/aprobacionClient'

const ButtonStyled = styled.button`
    padding:5px 16px;
    border: none;
    border-radius: 2px;
    background-color: #bfc0c2;
    cursor: pointer;
    &:active{
        background-color: #818283;
    }
`
const ApprovalButton = ({proveedor, Orden, Aprobador}) => {
    const client = new AprobacionClient(proveedor)
    const postAprobacion = async () => {
        const res = await client.postAprobacion(Orden, Aprobador)
        console.log(res);
    }
    
  return (
    <ButtonStyled onClick={() => postAprobacion()}>Aprobar</ButtonStyled>
  )
}

export default ApprovalButton