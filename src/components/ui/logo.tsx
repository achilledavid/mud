import Link from "next/link";
import { Button } from "./button";

export default function Logo() {
    return (
        <Button variant="link" asChild className="font-semibold">
            <Link href="/">@mud</Link>
        </Button>
    )
}