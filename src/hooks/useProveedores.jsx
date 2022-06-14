import {useContext} from 'react'
import ProveedorContext from '../context/ProveedorContext'

const useProveedores = () => useContext(ProveedorContext)


export default useProveedores