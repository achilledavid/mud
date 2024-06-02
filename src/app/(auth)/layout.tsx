import { Fragment } from "react";
import style from "./auth.module.scss";
import { AuthHeader } from "@/components/header/header";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <Fragment>
            <AuthHeader />
            <main className={style.container}>
                <div className="bg-zinc-900" />
                <div className={style.form}>
                    {children}
                </div>
            </main>
        </Fragment>
    )
}