import axios from "axios";
import { levelCalculator } from "../utils/utils";
import { APROBACION_URL } from "../constants/constant";

export default class AprobacionClient {
    AprobacionCliente
    Orden
    OrdenNivel
    constructor(orden) {
        this.AprobacionCliente = axios.create({
            baseURL: APROBACION_URL,
            headers: {'X-Custom-Header': 'foobar'}, 
            withCredentials: true
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
        let res = await this.AprobacionCliente.get(`/api/OrdenCredito/WorkFlow/${this.Orden.gerenciacodigo}/${this.OrdenNivel}/${this.Orden.transaccionid}/${this.Orden.area.trim()}`)
        return res.data
    }
    postAprobacion = async (Orden,Aprobador) => {
        const id = this.Orden.transaccionid
        let res = await this.AprobacionCliente.post("Api/OrdenCredito/PostAprobacion",{id,Aprobador,Orden})
        return res.data
    }
    postRechazo = async (Orden,Aprobador,Motivo) => {
        const id = this.Orden.transaccionid
        let res = await this.AprobacionCliente.post("api/OrdenCredito/PostRechazo",{id,Aprobador,Orden,Motivo})
        return res.data
    }
}