import styled from "@emotion/styled"

const StyledDiv = styled.div`
background-color: white;
    color: black;
    width: 80vw;
    border-radius: 10px;
    font-weight: 700;
    margin-bottom: 2rem ;
    position: relative;
    p{
        margin: 1rem;
    }
    .fecha{
        top: 0;
        right: 1rem;
        position: absolute;
    }
`;

const ClientCard = ({client}) => {
  return (
    <StyledDiv>
        <p>Cliente: <span>{client.proveedor}</span></p>
        <p className="fecha">Fecha: <span>{client.fecha}</span></p>
        <p>Motivo: <span>{client.motivo}</span></p>
        <p>N° Factura: <span>{client.faturanumero}</span></p>
        <p>Refacturar: <span>{client.refacturar ? "Si" : "No"}</span></p>
    </StyledDiv>
  )
}

export default ClientCard