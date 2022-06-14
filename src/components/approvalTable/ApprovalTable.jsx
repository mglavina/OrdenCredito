import React, { useEffect, useState } from 'react'
import AprobacionClient from '../../core/aprobacionClient'
import ApprovalTableIdExterno from '../approvalTableIdExterno/ApprovalTableIdExterno'
import ApprovalTableIdGerencia from '../approvalTableIdGerencia/ApprovalTableIdGerencia'
const ApprovalTable = ({proveedor}) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const componentMount = async () => {
        console.log(proveedor);
        const client = new AprobacionClient(proveedor)
        try {
            console.log();
            const data = await client.getGrillaIdExterno()
            setData(data)
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
        {data && <ApprovalTableIdExterno data={data} />}
        {error && <ApprovalTableIdGerencia proveedor={proveedor}/>}
    </>
  )
}

export default ApprovalTable