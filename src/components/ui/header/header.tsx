"use client";

import Link from "next/link";
import style from "./header.module.scss"
import Logo from "../logo";
import { Button } from "../button";
import { User } from "lucide-react";

export default function Header() {
    return (
        <header className={style.container}>
            <Logo />
            <Button size="sm" asChild>
                <Link href="/sign-in"><User className="w-4 h-4 mr-2" />Sign In</Link>
            </Button>
        </header >
    )
}