import Link from "next/link";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Logo(props: ButtonProps) {
    return (
        <Button {...props} variant="link" asChild className={cn("font-semibold", props.className)}>
            <Link href="/">@mud/insight</Link>
        </Button>
    )
}