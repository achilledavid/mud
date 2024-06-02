import SignUpForm from "./form"
import { Fragment } from "react"

export default function SignIn() {
    return (
        <Fragment>
            <h1>Create an account</h1>
            <small>Enter your e-mail below to create your account</small>
            <SignUpForm />
        </Fragment>
    )
}