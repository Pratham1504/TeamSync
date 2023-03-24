import  useOrgAuthContext  from "./useOrgAuthContext"

const useOrgout = () =>{
    const {dispatch} = useOrgAuthContext()

    const orgout = () =>{
        //remove user from storage 
        localStorage.removeItem('org')

        //dispatch logout action
        dispatch({type:'ORGOUT'})
    }

    return {orgout}
}

export default useOrgout