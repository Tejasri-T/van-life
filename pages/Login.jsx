import { useState } from "react"
import {   useLoaderData,useNavigate, Form,redirect } from "react-router-dom"
import { loginUser } from "../api"

export function loader({request}){
    return new URL(request.url).searchParams.get("message")
}

export async function action({request}){
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const data = await loginUser({email,password})
    console.log("setting")
    localStorage.setItem("loggedIn",true)  
    console.log(data)
     
    throw redirect("/host")


}

export default function Login() {
    const [status,setStatus]=useState("idle")
    const [error, setError] = useState(null)
    const message = useLoaderData()

 
    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h3 className="red">{message}</h3>} 
            {error && <h3 className="red">{error}</h3>}
            
            <Form  method="post" className="login-form" replace>
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button 
                    disabled = {status === "submitting"}
                    >{status === "submitting" ? "logging in":"Log in"}</button>
            </Form>
        </div>
    )

}