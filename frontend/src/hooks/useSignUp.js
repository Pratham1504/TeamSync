import {useState} from 'react'
import  useAuthContext from './useAuthContext'

const useSignUp = () =>{
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const signup = async (email,password,image,name) => {
        setIsLoading(true)  
        setError(null)
        console.log("here")
        const response = await fetch('/user/signup',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({name,email,password,image})
        })
        const json = await response.json()
        console.log(response)
        // json.token = response.headers.token

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            // save the user to the local storage
            localStorage.setItem('user',JSON.stringify(json))

            //update the auth context
            dispatch({type:'LOGIN' ,payload:json})
            setIsLoading(false)
        }
    }
    return {signup , isLoading , error}
}

export default useSignUp