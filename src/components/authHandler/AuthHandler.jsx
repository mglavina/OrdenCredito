import React,{useEffect} from 'react'
import useGlobalContext from '../../hooks/useGlobalContext'
import getUser from '../../core/getUser'
import { getUserNameFromWindowsLogin, getIdFromMail} from '../../utils/utils'

const AuthHandler = ({children}) => {
const {global,setGlobal} = useGlobalContext()

    useEffect(() => {
        getUser()
            .then(res => {
                console.log("then");
                const userName = getUserNameFromWindowsLogin(res.data[0]) 
                const userId = getIdFromMail(res.data[0]) 
                setGlobal({...global,user:res.data[0],userName,userId,error:false})
            }) 
            .catch(err => {
                console.log(err);
                setGlobal({...global,loadingUser : false,error:{ statusCode: 401, estado: true}})
         })
    }, [])

    return (
        global?.loadingUser ?
        <div> 
            Loading
        </div>
        :
        <>
            {children}
        </>
    )

}
export default AuthHandler