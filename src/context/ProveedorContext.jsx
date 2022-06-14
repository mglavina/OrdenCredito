import { createContext } from "react";

const ProveedorContext = createContext({proveedor:{

    area:null ,
    facturaarea:null ,
    facturatotal:null ,
    faturanumero:null ,
    fecha:null ,
    fechavtooc:null ,
    gerencia:null ,
    gerenciacodigo:null ,
    identificacionexterna:null ,
    importetotal:null ,
    motivo:null ,
    numerodocumento:null ,
    proveedor:null ,
    proveedorcodigo:null ,
    refacturar:null ,
    transaccionid:null ,
    transaccionidfactura:null ,
    usR_GERENCIAID:null 
}, setProveedor : () => {}
})

export default ProveedorContext