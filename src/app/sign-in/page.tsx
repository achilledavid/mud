import SignInForm from "./form"
import style from "./sign-in.module.scss"

export default function SignIn() {
    return (
        <main className={style.container}>
            <div className="bg-zinc-900" />
            <div className={style.form}>
                <h1>Create an account</h1>
                <small>Enter your email below to create your account</small>
                <SignInForm />
            </div>
        </main>
    )
}