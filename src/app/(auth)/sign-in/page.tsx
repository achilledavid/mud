import Logo from "@/components/ui/logo"
import SignInForm from "./form"
import style from "../auth.module.scss"

export default function SignIn() {
    return (
        <main className={style.container}>
            <div className="bg-zinc-900">
                <Logo />
            </div>
            <div className={style.form}>
                <h1>Welcome back!</h1>
                <small>Please sign in to your account to access all the features.</small>
                <SignInForm />
            </div>
        </main>
    )
}