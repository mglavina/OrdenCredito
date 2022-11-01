import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';
import Spinner from '../spinner/Spinner';
import useGlobalContext from '../../hooks/useGlobalContext';
import TeamplaceClient from '../../core/teamplaceClient';
import ExportCsvButton from '../exportCsvButton/ExportCsvButton';
import { useEffect } from 'react';
import { useState } from 'react';

const HistoricoTable = () => {
  const teamplaceClient = new TeamplaceClient()
  const [orders, setOrders] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const {global,setGlobal} = useGlobalContext()
  const navigate = useNavigate()

  useEffect(() => {
    setError(null)
    setOrders([])
    setLoading(true)
    teamplaceClient.getOrdenesDeCreditoAprobadas()
      .then(orders => setOrders(orders))
      .catch(error => setError(error))
      .finally(() => setLoading(false))
  }
  ,[])


    const handleClickRow = (order) => {
      setGlobal({...global,proveedor : order})
      const orderWithoutAmp = JSON.stringify(order).replace('&','%26')
      navigate(`/detail/${order.identificacionExterna}/?ordenOrigin=${orderWithoutAmp}`)
  }
  return (
    <>
      { loading && <Spinner ></Spinner>}
      { error && <p>{JSON.stringify(error)}</p>}
      {orders.length > 0 &&
      <TableContainer >
                  <Table sx={{ minWidth: 650 ,boxShadow:3}} aria-label="simple table">
                      <TableHead>
                      <TableRow
                      sx={{'th':{fontSize:18,fontWeight:500,backgroundColor:"#d7d9db"}}}
                      >
                          <TableCell sx={{ width: 120 }}>N° de orden</TableCell>
                          <TableCell>Area</TableCell>
                          <TableCell sx={{ width: 110 }}>Fecha</TableCell>
                          <TableCell align="left">Importe Total</TableCell>
                          <TableCell align="left">Motivo</TableCell>
                          <TableCell align="left">Cliente</TableCell>
                          <TableCell align="left">Fecha de Aprobacion</TableCell>
                          <TableCell align="left">N° Documento</TableCell>
                          <TableCell align="left">Importe NC</TableCell>
                      </TableRow>
                      </TableHead>
                      <TableBody
                      sx={{'tr:nth-child(even)':{backgroundColor:'#6c99cc'}}}
                      >
                      {orders.map((order) => (
                          <TableRow
                          key={order.transaccionid}
                          sx={{ '&:last-child td, &:last-child th': { border: 0}}}
                          onClick={() => handleClickRow(order)}
                          >
                              <TableCell component="th" scope="row">{order.identificacionExterna}</TableCell>
                              <TableCell component="th" scope="row">{order.area}</TableCell>
                              <TableCell component="th" scope="row">{order.fecha}</TableCell>
                              <TableCell align="left">{Number(order.importetotal).toCurrency()}</TableCell>
                              <TableCell align="left">{order.motivo}</TableCell>
                              <TableCell align="left">{order.proveedor}</TableCell>
                              <TableCell align="left">{order.fechaAprobacion}</TableCell>
                              <TableCell align="left">{order.docVinculado}</TableCell>
                              <TableCell align="left">{Number(order.docVinculado_Importe).toCurrency()}</TableCell>
                          </TableRow>
                      ))}
                      </TableBody>
                  </Table>
      </TableContainer>
      }
    </>
  )
}

export default HistoricoTable