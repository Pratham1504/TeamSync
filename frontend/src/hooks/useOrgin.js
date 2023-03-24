import {useState} from 'react'
import  useOrgAuthContext from './useOrgAuthContext'

const useOrgin = () =>{
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch} = useOrgAuthContext()

    const orgin = async (id) => {
        setIsLoading(true)  
        setError(null)

        const response = await fetch(`/organisation/${id}`,{
            method:'GET',
            headers:{'Content-Type':'application/json'}
        })
        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            
            localStorage.setItem('org',JSON.stringify(json))

            //update the auth context
            dispatch({type:'ORGIN' ,payload:json})
            setIsLoading(false)
        }
    }
    return {orgin , isLoading , error}
}

export default useOrgin