import axios from "axios";
import { levelCalculator } from "../utils/utils";
const APROBACION_URL = process.env.REACT_APP_BASE_URL_APROBACION
export default class AprobacionClient {
    AprobacionCliente
    Orden
    OrdenNivel
    constructor(orden) {
        this.AprobacionCliente = axios.create({headers: {
            "access-control-allow-methods":"GET, PUT, POST, DELETE, HEAD, OPTIONS",
            "access-control-allow-origin": "http://localhost:3000"
        },
            baseURL: APROBACION_URL
        })
        this.Orden = orden
        const importeTotal = Number(orden.importetotal) >= 0 ? Number(orden.importetotal) : Number(orden.importetotal) * (-1)  
        this.OrdenNivel = levelCalculator(importeTotal)
    }

    getGrillaIdExterno = async () => {
        //let res = await this.AprobacionCliente.get(`/api/OrdenCredito/WorkFlowAprobada/${this.Orden.identificacionexterna}`)
        let res = await this.AprobacionCliente.get(`/api/OrdenCredito/WorkFlowAprobada/${this.Orden.transaccionid}`)
        return res.data
    }
    getGrillaIdGerencia = async () => {
        //let res = await this.AprobacionCliente.get(`/api/OrdenCredito/WorkFlow/${this.Orden.gerenciacodigo}/${this.OrdenNivel}/${this.Orden.identificacionexterna}`)
        let res = await axios.get("https://aprobacion.azurewebsites.net/api/OrdenCredito/WorkFlow/CUYO/2/7")
        return res.data
    }
}