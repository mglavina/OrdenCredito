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
}