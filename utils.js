import { redirect } from "react-router-dom"

export async function requireAuth(request){

      const redirectTo = (new URL(request.url)).pathname
      console.log(redirectTo)
    const isLoggedIn = localStorage.getItem("loggedIn")

    console.log("is looged in",isLoggedIn,localStorage.getItem("loggedIn"))

    if (!isLoggedIn){
        console.log("redirected to login")
        throw redirect(`/login?message=you must log in first.&redirectTo=${redirectTo}`)
    }
} 