import { orgAuthContext } from "../context/orgAuthContext"
import { useContext } from "react"

const useOrgAuthContext = () => {
  const context = useContext(orgAuthContext)

  if(!context) {
    throw Error('useOrgAuthContext must be used inside an orgAuthContextProvider')
  }
  return context
}

export default useOrgAuthContext