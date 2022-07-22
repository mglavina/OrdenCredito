import axios from "axios";
import { TEAMPLACE_URL } from "../constants/constant";

export default class TeamplaceClient {
    TeamplaceClient
    constructor() {
        this.TeamplaceClient = axios.create({
            baseURL: TEAMPLACE_URL
        })
    }

    getGrillaHome = async () => {
        let res = await this.TeamplaceClient.get(`/Actions/getOrdenCredito`)
        return res.data
    }
    getGrillaDetail = async (identificacionExterno) => {
        let res = await this.TeamplaceClient.get(`/Actions/getOrdenCreditoDetalle/${identificacionExterno}`)
        return res.data
    }
    postValidateCreditOrder = async (identificacionExterno,resultado) => {
        let res = await this.TeamplaceClient.get(`/Actions/validarOrdenCredito/${identificacionExterno}/${resultado}`)
        return res.data
    }
}