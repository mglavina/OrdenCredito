import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../spinner/Spinner';
import useProveedores from '../../hooks/useProveedores';
import TeamplaceClient from '../../core/teamplaceClient';

export default function OrdersTable() {
    const {proveedor,setProveedor} = useProveedores()
    const [orders , setOrders] = React.useState([])
    const [loading , setLoading] = React.useState(false)
    const [error , setErrors] = React.useState(null)
    const navigate = useNavigate()

    const handleClick = (order) => {
        setProveedor(order)
        navigate(`/detail/${order.identificacionexterna}/?ordenOrigin=${JSON.stringify(order)}`)
    }

    const componentMount = async () => {
        const client = new TeamplaceClient()
        try {
            const data = await client.getGrillaHome()
            console.log(data);
            setOrders(data)
            setLoading(false)
            setErrors(null)
            
        } catch (error) {
            console.log(error);
            setLoading(false)
            setErrors(error)
        }
    } 
    React.useEffect(() => {
        setLoading(true)
        componentMount()
    }, [])

    
    return (
        <>
            { loading && <Spinner ></Spinner>}
            { error && <p>{JSON.stringify(error)}</p>}
            {orders.length > 0 &&
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 ,boxShadow:3}} aria-label="simple table">
                    <TableHead>
                    <TableRow
                    sx={{'th':{fontSize:18,fontWeight:500,backgroundColor:"#d7d9db"}}}
                    >
                        <TableCell>Area</TableCell>
                        <TableCell sx={{ width: 140 }}>Fecha</TableCell>
                        <TableCell align="left">Importe Total</TableCell>
                        <TableCell align="left">Motivo</TableCell>
                        <TableCell align="left">Proveedor</TableCell>
                        <TableCell align="left">Refacturar</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody
                    sx={{'tr:nth-child(even)':{backgroundColor:'#6c99cc'}}}
                    >
                    {orders.map((order) => (
                        <TableRow
                        key={order.transaccionid}
                        sx={{ '&:last-child td, &:last-child th': { border: 0},cursor:'pointer' }}
                        //onClick={() => navigate(`/detail/${order.identificacionexterna}/?facturatotal=${order.facturatotal}&proovedor=${order.proovedor}&facturanumero=${order.faturanumero}&motivo=${order.motivo}&importetotal=${order.importetotal}`)}
                        onClick={() => handleClick(order)}
                        >
                            <TableCell component="th" scope="row">{order.area}</TableCell>
                            <TableCell component="th" scope="row">{order.fecha}</TableCell>
                            <TableCell align="left">{Number(order.importetotal).toCurrency()}</TableCell>
                            <TableCell align="left">{order.motivo}</TableCell>
                            <TableCell align="left">{order.proveedor}</TableCell>
                            <TableCell align="left">{order.refacturar ? "Si" : "No"}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            }
      </>
  );
}