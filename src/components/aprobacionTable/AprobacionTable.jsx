import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Spinner from '../spinner/Spinner';

export default function AprobacionTable({identificacionexterno}) {
    const [aprobaciones , setAprobaciones] = React.useState([])
    const [error , setErrors] = React.useState(null)
    const [loading , setLoading] = React.useState(false)
    const navigate = useNavigate()

    React.useEffect(() => {
        setLoading(true)
        axios.get(`${process.env.REACT_APP_BASE_URL_APROBACION}/api/OrdenCredito/WorkFlowAprobada/${identificacionexterno}`)
        .then(({data}) => {
            console.log(data);
            setAprobaciones(data)
            setLoading(false)
            setErrors(null)
        })
        .catch(({response}) => {
            console.log(response);
            setLoading(false)
            setErrors(response)
        })
            
        
    }, [])

    
    return (
        <>  
            {loading && "Loading"}
            { error && <p>{JSON.stringify(error)}</p>}
            {aprobaciones.length > 0 ?
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 ,boxShadow:3}} aria-label="simple table">
                    <TableHead>
                    <TableRow
                    sx={{'th':{fontSize:18,fontWeight:500,backgroundColor:"#d7d9db"}}}
                    >
                        <TableCell>Area</TableCell>
                        <TableCell sx={{ width: 140 }}>Orden</TableCell>
                        <TableCell align="left">Fecha aprobacion</TableCell>
                        <TableCell align="left">Responsable</TableCell>
                        <TableCell align="left">Proveedor</TableCell>
                        <TableCell align="left">Aprobó</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody
                    sx={{'tr:nth-child(even)':{backgroundColor:'#6c99cc'}}}
                    >
                    {aprobaciones.map((aprobacion) => (
                        <TableRow
                        key={order.transaccionid}
                        sx={{ '&:last-child td, &:last-child th': { border: 0}}}
                        >
                            <TableCell component="th" scope="row">{aprobacion.orden}</TableCell>
                            <TableCell component="th" scope="row">{aprobacion.fecha_aprob}</TableCell>
                            <TableCell align="left">{Number(aprobacion.responsable).toCurrency()}</TableCell>
                            <TableCell align="left">{aprobacion.aprobo}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
                :
                <AprobacionGerenciaTable />
            }
      </>
  );
}