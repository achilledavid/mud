"use client";

import { Button } from "../button";
import { BarChart3, LogOut, Settings, User } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../dropdown-menu";
import { Avatar, AvatarFallback } from "../avatar";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Menu() {
    return (
        <ul>
            {/* <li><MyProfile /></li> */}
            <li>
                <Button size="sm" variant="secondary" asChild>
                    <Link href="/search"><User className="h-4 w-4 mr-2" />Find a player</Link>
                </Button>
            </li>
            <li>
                <Button size="sm" asChild>
                    <Link href="/sign-in">Sign In</Link>
                </Button>
            </li>
        </ul>
    )
}

function MyProfile() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                    <AvatarFallback>AD</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Achille DAVID</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem className="cursor-pointer">
                        <User className="mr-2 h-4 w-4" />
                        <span>Mon compte</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                        <BarChart3 className="mr-2 h-4 w-4" />
                        <span>Mes statistiques</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Paramètres</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem className="cursor-pointer" onClick={() => signOut()}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Déconnexion</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}