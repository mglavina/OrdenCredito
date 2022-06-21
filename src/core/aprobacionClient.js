import axios from "axios";
import { levelCalculator } from "../utils/utils";
const APROBACION_URL = process.env.REACT_APP_BASE_URL_APROBACION
export default class AprobacionClient {
    AprobacionCliente
    Orden
    OrdenNivel
    constructor(orden) {
        this.AprobacionCliente = axios.create({
            baseURL: APROBACION_URL
        })
        this.Orden = orden
        const importeTotal = Number(orden.importetotal) >= 0 ? Number(orden.importetotal) : Number(orden.importetotal) * (-1)  
        this.OrdenNivel = levelCalculator(importeTotal)
    }

    getGrillaIdExterno = async () => {
        let res = await this.AprobacionCliente.get(`/api/OrdenCredito/WorkFlowAprobada/${this.Orden.transaccionid}`)
        return res.data
    }
    getGrillaIdGerencia = async () => {
        let res = await this.AprobacionCliente.get(`/api/OrdenCredito/WorkFlow/${this.Orden.gerenciacodigo}/${this.OrdenNivel}/${this.Orden.identificacionexterna}`)
        console.log(res)
        return res.data
    }
    postAprobacion = async (Orden,Aprobador) => {
        const id = this.Orden.transaccionid
        let res = await this.AprobacionCliente.post("Api/OrdenCredito/PostAprobacion",{id,Aprobador,Orden})
        console.log(res.data)
        return res.data
    }
    postRechazo = async (Orden,Aprobador,Motivo) => {
        const id = this.Orden.transaccionid
        let res = await this.AprobacionCliente.post("api/OrdenCredito/PostRechazo",{id,Aprobador,Orden,Motivo})
        console.log(res.data)
        return res.data
    }
}