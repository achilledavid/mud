import { cn } from "@/lib/utils";
import style from "./header.module.scss"
import Logo from "./logo";
import Menu from "./menu";

export default function Header() {
    return (
        <header className={style.container}>
            <Logo />
            <Menu />
        </header >
    )
}

export function AuthHeader() {
    return (
        <header className={cn(style.container, style.auth)}>
            <Logo className={style.logo} />
        </header >
    )
}