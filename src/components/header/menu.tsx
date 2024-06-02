import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Link from "next/link";

export default function Menu() {
    return (
        <ul className="inline-flex space-x-2">
            <li>
                <Button size="sm" asChild>
                    <Link href="/sign-in"><User className="w-4 h-4 mr-2" />Sign In</Link>
                </Button>
            </li>
        </ul >
    )
}