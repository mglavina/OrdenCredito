import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import AprobacionClient from '../../core/aprobacionClient';
import TeamplaceClient from '../../core/teamplaceClient';
import styled from '@emotion/styled';
import {useNavigate} from 'react-router-dom'
import { RESULTADOS } from '../../constants/constant';

const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    button{
        padding:5px 16px;
        border: none;
        border-radius: 2px;
        background-color: #bfc0c2;
        cursor: pointer;
        &:active{
            background-color: #818283;
        }
    }
`
const BackDropContainer = styled.div`
    background-color: #e3e3e9;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    min-width: 30vw;
    min-height: 30vh;
    border-radius: 5px;
    span{
        color: black;
        margin: 1rem auto;
        font-size: 1.2rem;
    }
    textarea{
        border: none;
        padding: 5px;
        border-radius: 5px;
        margin: 1rem auto;
        width: 80%;
        resize: none;
    }
    small{
        margin: 0 auto;
        color: red ;
    }
`

const CloseButton = styled.button`
    position: absolute;
    border: none;
    background-color: transparent;
    font-size: 1.1rem;
    right: 8px;
    top: 8px;
    cursor: pointer;
`

export default function ApprovalBackdrop({proveedor, Orden, Aprobador,UltimaFila}) {
  const [open, setOpen] = React.useState(false);
  const [rechazar, setRechazar] = React.useState(false);
  const [motivo, setMotivo] = React.useState(false);
  const [status, setStatus] = React.useState(null);
  const clientAprobacion = new AprobacionClient(proveedor)
  const clientTeamplace = new TeamplaceClient()
  const navigate = useNavigate()

  const handleClose = () => {
    setOpen(false);
    setRechazar(false)
    setMotivo(false)
  };

  const reloadPage = () => {
navigate(0)
  }

  const handleChangeTextArea = (e) => {
    setMotivo(e.target.value)
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const rechazarOnClick = () => {
    if (rechazar == false) {
        setRechazar(true)
    }else{
        postRechazo()
    }
  };

  const postAprobacion = async () => {
      const resAprobacion = await clientAprobacion.postAprobacion(Orden, Aprobador)
      if(UltimaFila){
        const resTeamplace = await clientTeamplace.postValidateCreditOrder(proveedor.identificacionexterna, RESULTADOS.APROBADO)
        console.log(resTeamplace);
      }
      console.log(resAprobacion);
      reloadPage()
  }

  const postRechazo = async () => {
    if(!motivo){
        setMotivo("error")
        return
    }
      const resAprobacion = await clientAprobacion.postRechazo(Orden, Aprobador,motivo)
      const resTeamplace = await clientTeamplace.postValidateCreditOrder(proveedor.identificacionexterna,RESULTADOS.RECHAZADO)
      console.log(resAprobacion);
      console.log(resTeamplace);
      reloadPage()
  }

  return (
    <div>
      <Button 
        sx={{
            color: "black",
            backgroundColor: "#bbbaba",
            '&:hover': {
                backgroundColor:"#aaa9a9",
              }
          }}
        onClick={handleToggle}>Aprobar</Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <BackDropContainer>
            <CloseButton
            onClick={handleClose}>
                X
            </CloseButton>
            <span>??Que desea hacer con la orden?</span>
            {rechazar && 
            <textarea
            placeholder="Motivo por el cual rechaza"
            onChange={handleChangeTextArea}
            >
            </textarea>}
            {
                (rechazar && motivo == "error") && <small>El motivo es obligatorio para rechazar</small>
            }
            <ButtonsContainer>
                <button onClick={() => rechazarOnClick()}>RECHAZAR</button>
                {
                    !rechazar && <button onClick={() => postAprobacion()}>APROBAR</button>
                }
            </ButtonsContainer>           
        </BackDropContainer>
      </Backdrop>
    </div>
  );
}