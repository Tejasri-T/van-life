import { useState } from "react"
import { useLoaderData, useActionData, Form, redirect, useNavigation } from "react-router-dom"
import { loginUser } from "../api"

export function loader({ request }) {

    return new URL(request.url).searchParams.get("message")

}

export async function action({ request }) {

    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")

    try {
        const data = await loginUser({ email, password })
        console.log("setting")
        localStorage.setItem("loggedIn", true)
        const pathname = new URL(request.url)
                            .searchParams.get("redirectTo") || "/"

        console.log(pathname)
        // const pathname = 

        return redirect(pathname)

    } catch (err) {
        return err.message
    }




}

export default function Login() {
    const [status, setStatus] = useState("idle")
    const message = useLoaderData()
    const error = useActionData()
    const navigation = useNavigation()
    console.log(navigation.state)
    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h3 className="red">{message}</h3>}
            {error && <h3 className="red">{error}</h3>}

            <Form method="post" className="login-form" replace>
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
                    disabled={navigation.state === "submitting"}
                    style={navigation.state === "submitting" ? { backgroundColor: "#B35A1F", opacity: 0.8, fontStyle: "italic" } : null}
                >{navigation.state === "submitting" ? "logging in..." : "Log in"}</button>
            </Form>
        </div>
    )

}