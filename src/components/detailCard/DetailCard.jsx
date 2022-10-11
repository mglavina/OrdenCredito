import styled from '@emotion/styled'
import React from 'react'

const DetailCardContainer = styled.article`
    margin-top: 10px;
    width: 80vw;
    height: 100%;
    background-color: white;
    border-radius: 10px;
    box-shadow: -4px 10px 15px -3px rgba(0,0,0,0.1);
    h4{
        position: relative;
        margin: 0 0 0.5rem 1rem;
    }
`;
const SpanStyled = styled.article`
    position: absolute;
    top: 0;
    right: 2rem;
`;
const ProductoInfoContainer = styled.div`
    width: 100%;
    padding-top: 1px;
    background-color:#d7d9db;
    border-radius: 10px 10px 0px 0px;
    h1{ 
        font-size: 1.5rem;
        margin: 1rem 0 1rem 1rem;
    }
    h4{
        margin-left: 1rem;
        padding-bottom:4px;
    }
`;

const DetailCard = ({detailInfo}) => {
    const {
        producto="",
        productocodigo="",
        cantidad="",
        precio="",
    } = detailInfo
  return (
    <DetailCardContainer className='DetailCardContainer'>
        <ProductoInfoContainer>
            <h1>Producto : {producto}</h1>
            <h4>Codigo:  {productocodigo}</h4>
        </ProductoInfoContainer>
        {/* {
            Object.keys(detailInfo).map( dato => (
                <>
                    <h2>{dato.toLocaleUpperCase()} : <SpanStyled>{detailInfo[dato]}</SpanStyled></h2>
                    <hr/>   
                </>
            ))
        } */}
        {/* <h2>Fecha : <SpanStyled>{fecha}</SpanStyled></h2>
        <hr/>
        <h2>N°Factura : <SpanStyled>{facturanumero}</SpanStyled></h2>
        <hr/>
        <h2>Total Factura : <SpanStyled>{Number(facturatotal).toCurrency()}</SpanStyled></h2>
        <hr/> */}
        <h4>Cantidad : <SpanStyled>{cantidad}</SpanStyled></h4>
        <hr/>
        <h4>Precio : <SpanStyled>{Number(precio).toCurrency()}</SpanStyled></h4>
    </DetailCardContainer>
  )
}

export default DetailCard