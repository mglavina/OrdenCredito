import React, { useEffect, useState } from 'react'
import AprobacionClient from '../../core/aprobacionClient'
import ApprovalTableIdExterno from '../approvalTableIdExterno/ApprovalTableIdExterno'
import ApprovalTableIdGerencia from '../approvalTableIdGerencia/ApprovalTableIdGerencia'
const ApprovalTable = ({proveedor}) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const componentMount = async () => {
        const client = new AprobacionClient(proveedor)
        try {
            const dataIdExterno = await client.getGrillaIdExterno()
            setData(dataIdExterno)
            setLoading(false)
        } catch (err) {
            setLoading(false)
            setError(err)
        }
    }
    useEffect(() => {
    setLoading(true)
    componentMount()  
    }, [])
    
  return (
    <>  
        {loading && <p>Loading</p>}
        {(data && data.length > 0) && <ApprovalTableIdExterno data={data} proveedor={proveedor} />}
        {(!data || data.length <= 0) &&  <ApprovalTableIdGerencia proveedor={proveedor}/>}
    </>
  )
}

export default ApprovalTable