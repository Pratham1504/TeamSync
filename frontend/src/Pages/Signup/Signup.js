import { useState } from "react"
import useSignUp  from "../../hooks/useSignUp"

const SignUp = ()=>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')
    const [image,setImage] = useState('')

    const {signup , isLoading , error} = useSignUp()


    const handleSubmit = async (e) =>{
        e.preventDefault()
        await signup(email,password,image,name)
    }

    return(
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign up</h3>

            <label>Name:</label>
            <input 
                type="name" 
                onChange={(e)=>setName(e.target.value)}
                value= {name}
            />

            <label>Email:</label>
            <input 
                type="email" 
                onChange={(e)=>setEmail(e.target.value)}
                value= {email}
            />
            <label>Password:</label>
            <input 
                type="password" 
                onChange={(e)=>setPassword(e.target.value)}
                value= {password}
            />  

            <label>Image:</label>
            <input 
                type="name" 
                onChange={(e)=>setImage(e.target.value)}
                value= {image}
            /> 
            <button disabled={isLoading}>Sign up</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default SignUp