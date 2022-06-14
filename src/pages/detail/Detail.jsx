import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import DetailCard from '../../components/detailCard/DetailCard';
import Spinner from '../../components/spinner/Spinner';
import styled from '@emotion/styled';
import {useSearchParams} from 'react-router-dom';
import ClientCard from '../../components/clientCard/ClientCard';
import Total from '../../components/total/Total';
import TeamplaceClient from '../../core/teamplaceClient';
import ApprovalTable from '../../components/approvalTable/ApprovalTable';

const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .DetailCardContainer:nth-child(1){
      div{
        border-radius: 5px 5px 0px 0px;  
      }
      border-radius: 5px 5px 0px 0px;
    }
    .DetailCardContainer:nth-last-child(1){
      div{
        border-radius: 0px 0px 5px 5px;  
      }
      border-radius: 0px 0px 5px 5px;
    }
`;

const Detail = () => {
    let params = useParams()
    let [searchParams,]= useSearchParams()
    const [orders , setOrders] = React.useState([])
    const [client , setClient] = React.useState(null)
    const [loading , setLoading] = React.useState(false)
    const [error , setError] = React.useState(null)

    const componentMount = async (id) => {
      const client = new TeamplaceClient()
      try {
          const data = await client.getGrillaDetail(id)
          console.log(data);
          let clientInfo = {}
          for (const entry of searchParams.entries()) {
            console.log(entry);
            const objectOfEntry = {[entry[0]]:JSON.parse(entry[1])}
            clientInfo = {...clientInfo,...objectOfEntry} 
          }
          setClient(clientInfo.ordenOrigin)
          setOrders(data)
          setLoading(false)
          setError(null)    
      } catch (err) {
        console.log(err);
        setLoading(false)
        setError(err)
      }
    }
    useEffect(() => {
        setLoading(true)
        componentMount(params.orderId)
    }, [])
  return (
    <DetailContainer>
            {loading && <Spinner />}
            {error && <p>{JSON.stringify(error)}</p>}
            {client && <ClientCard client={client}/>}
            {orders.length > 0 && orders.map((order) => (
            <>
              <DetailCard detailInfo={order} />
            </>
            ))}
            {client && (
            <>
            <Total total={client.importetotal} /> 
            <ApprovalTable proveedor={client}/>
            </>
            )}
    </DetailContainer>
  )
}

export default Detail