import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from '@emotion/styled';
import ApprovalButton from './atom/approvalButton/ApprovalButton';
import ApprovalBackdrop from '../backdrop/Backdrop';

const TableContainerIdExterno = styled(TableContainer)`
    width: 80vw;
`;

const ApprovalTableIdExterno = ({data,proveedor}) => {
    const[rowWithButton, setRowWithButton] = React.useState(null)
    React.useEffect(() => {
      let dataNotApproved = data.filter(aprobacion => aprobacion.aprobador == null)
                                .map(aprobacion =>{
        if (!aprobacion.fecha && !aprobacion.aprobador) {
            return aprobacion.orden
        }
      })
      console.log(dataNotApproved);
      setRowWithButton(Math.min(...dataNotApproved)) 
    }, [])
    
  return (
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
            </TableRow>
            </TableHead>
            <TableBody
            sx={{'tr:nth-child(even)':{backgroundColor:'#6c99cc'}}}
            >
            {data.map((order) => (
                <TableRow
                key={order.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0},cursor:'pointer' }}
                >
                    <TableCell component="th" scope="row">{order.orden}</TableCell>
                    <TableCell component="th" scope="row">{order.fecha}</TableCell>
                    <TableCell align="left">{order.responsable}</TableCell>
                    <TableCell align="left">{rowWithButton == order.orden?
                                            <ApprovalBackdrop
                                            proveedor={proveedor}
                                            Orden={order.orden}
                                            Aprobador={"GOLIBANO"}
                                            />:
                                            order.aprobador}
                    </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainerIdExterno>
  )
}

export default ApprovalTableIdExterno
