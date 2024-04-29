import style from "./header.module.scss"
import Logo from "../logo";
import Menu from "./menu";

export default function Header() {
    return (
        <header className={style.container}>
            <Logo />
            <Menu />
        </header >
    )
}