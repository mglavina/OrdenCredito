import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from '@emotion/styled';
import ApprovalBackdrop from '../backdrop/Backdrop';
import Motivo from '../motivo/Motivo';
import useGlobalContext from '../../hooks/useGlobalContext';

const TableContainerIdExterno = styled(TableContainer)`
    width: 80vw;
`;

const ApprovalTableIdExterno = ({data,proveedor}) => {
    const[rowWithButton, setRowWithButton] = React.useState(null)
    const[rejected, setRejected] = React.useState(null)
    const {global,} = useGlobalContext()
    const {userId} = global

    React.useEffect(() => {
      let dataNotApproved = data.filter(aprobacion => aprobacion.aprobador == null)
                                .map(aprobacion =>{
        if (!aprobacion.fecha && !aprobacion.aprobador) {
            return aprobacion.orden
        }
      })
      const rejected = data.find(aprobacion => aprobacion.rechazo == 1)
      setRejected(rejected)
      console.log(dataNotApproved);
      setRowWithButton(Math.min(...dataNotApproved)) 
    }, [])
    
  return (
    <> 
        {rejected && <Motivo motivo={rejected.motivo} />}
        <TableContainerIdExterno component={Paper}>
            <Table sx={{ minWidth: 650 ,boxShadow:3}} aria-label="simple table">
                <TableHead>
                <TableRow
                sx={{'th':{fontSize:18,fontWeight:500,backgroundColor:"#d7d9db"}}}
                >
                    <TableCell align="left">Orden</TableCell>
                    <TableCell align="left">Fecha_aprob</TableCell>
                    <TableCell align="left">Responsable</TableCell>
                    <TableCell align="left">Aprobo</TableCell>
                    <TableCell align="left">Rechazo</TableCell>
                </TableRow>
                </TableHead>
                <TableBody
                sx={{'tr:nth-child(even)':{backgroundColor:'#6c99cc'}}}
                >
                {data.map((order,i) => (
                    rejected?.orden != order.orden ?
                    <TableRow
                    key={order.orden}
                    sx={{ '&:last-child td, &:last-child th': { border: 0} }}
                    >
                        <TableCell component="th" scope="row">{order.orden}</TableCell>
                        <TableCell component="th" scope="row">{order.fecha}</TableCell>
                        <TableCell align="left">{order.responsable}</TableCell>
                        <TableCell align="left">{rowWithButton == order.orden && !rejected && order.responsable == userId ?
                                                <ApprovalBackdrop
                                                proveedor={proveedor}
                                                Orden={order.orden}
                                                Aprobador={userId}
                                                />:
                                                order.aprobador}
                        </TableCell>
                        <TableCell align="left">{order.rechazo == 1 ? "Si" : "-"}</TableCell>
                    </TableRow>
                    :
                    <TableRow
                    key={order.id}
                    id="rowRejected"
                    >
                        <TableCell component="th" scope="row">{order.orden}</TableCell>
                        <TableCell component="th" scope="row">{order.fecha}</TableCell>
                        <TableCell align="left">{order.responsable}</TableCell>
                        <TableCell align="left">{rowWithButton == order.orden && !rejected ?
                                                <ApprovalBackdrop
                                                proveedor={proveedor}
                                                Orden={order.orden}
                                                Aprobador={userId}
                                                />:
                                                order.aprobador}
                        </TableCell>
                        <TableCell align="left">{order.rechazo == 1 ? "Si" : "-"}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainerIdExterno>
    </>
  )
}

export default ApprovalTableIdExterno
