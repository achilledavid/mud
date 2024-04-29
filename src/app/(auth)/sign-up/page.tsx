import Logo from "@/components/ui/logo"
import SignUpForm from "./form"
import style from "../auth.module.scss"

export default function SignIn() {
    return (
        <main className={style.container}>
            <div className="bg-zinc-900">
                <Logo />
            </div>
            <div className={style.form}>
                <h1>Create an account</h1>
                <small>Enter your e-mail below to create your account</small>
                <SignUpForm />
            </div>
        </main>
    )
}