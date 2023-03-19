import  useAuthContext  from "./useAuthContext"
import React from "react"

const useLogout = () =>{
    const {dispatch} = useAuthContext()

    const logout = () =>{
        //remove user from storage 
        localStorage.removeItem('user')

        //dispatch logout action
        dispatch({type:'LOGOUT'})
    }

    return {logout}
}

export default useLogout