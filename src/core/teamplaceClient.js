import axios from "axios";
import { TEAMPLACE_URL } from "../constants/constant";

export default class TeamplaceClient {
    TeamplaceClient
    constructor() {
        this.TeamplaceClient = axios.create({
            baseURL: TEAMPLACE_URL,
            headers: {'X-Custom-Header': 'foobar'}, 
            withCredentials: true
        })
    }

    getGrillaHome = async (userName) => {
        let res = await this.TeamplaceClient.get(`/api/OrdenesCredito/GetOrdenesDeCredito/${userName}`)
        return res.data
    }
    getGrillaDetail = async (identificacionExterno) => {
        let res = await this.TeamplaceClient.get(`/api/OrdenesCredito/GetOrdenDeCredito/${identificacionExterno}`)
        return res.data
    }
    postValidateCreditOrder = async (identificacionExterno,resultado) => {
        let res = await this.TeamplaceClient.post(`/api/OrdenesCredito/ValidarOrdenDeCredito/${identificacionExterno}/${resultado}`)
        return res.data
    }
    postEnviarAvisoMail = async (ordenDeCredito) => {
        let res = await this.TeamplaceClient.post(`/api/ordenescredito/enviarmailaviso`,ordenDeCredito)
        return res.data
    }
    postCreateResgistroOrdenDeCredito = async (ordenDeCredito) => {
        let res = await this.TeamplaceClient.post(`/api/ordencredito/createOrdenCredito`,ordenDeCredito)
        return res.data
    }
    getOrdenesDeCreditoAprobadas = async () => {
        let res = await this.TeamplaceClient.get(`/api/ordenescredito/OrdenCreditoAprobadas`)
        return res.data
    }
    putAprobarRegistroOrdenesDeCredito = async (identificacionExterna) => {
        let res = await this.TeamplaceClient.get(`/api/ordenescredito/OrdenCreditoAprobadas/${identificacionExterna}`)
        return res.data
    }
}