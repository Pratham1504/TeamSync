import {createContext,useReducer,useEffect} from 'react'
import React from 'react'

export const orgAuthContext =createContext()

export const orgAuthReducer = (state,action) =>{
    switch (action.type){
        case 'ORGIN':
            return {org:action.payload}
        case 'ORGOUT':
            return {org:null}
        default : 
            return state   
    }
}

export const OrgAuthContextProvider = ({children})=>{
    const [state,dispatch]=useReducer(orgAuthReducer,{
        org:null
    })

    useEffect(()=>{
        const org = JSON.parse(localStorage.getItem('org'))
        if(org){
            dispatch({type:'ORGIN',payload:org})
        }
    },[])

    console.log('orgAuthContext State: ',state)
    return (
        <orgAuthContext.Provider value = {{...state,dispatch}}>
            {children}
        </orgAuthContext.Provider>
    )
}