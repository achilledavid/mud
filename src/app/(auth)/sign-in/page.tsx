import { Fragment } from "react"
import SignInForm from "./form"

export default function SignIn() {
    return (
        <Fragment>
            <h1>Welcome back!</h1>
            <small>Please sign in to your account to access all the features.</small>
            <SignInForm />
        </Fragment>
    )
}