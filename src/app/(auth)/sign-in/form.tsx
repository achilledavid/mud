"use client"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Password } from "@/components/ui/password"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { LoaderCircle } from "lucide-react"
import Link from "next/link"

const formSchema = z.object({
    email: z.string().min(1, {
        message: "E-mail is required.",
    }).max(50, {
        message: "E-mail must be at most 50 characters.",
    }).email({
        message: "Invalid e-mail address.",
    }),
    password: z.string().min(1, {
        message: "Password is required.",
    }).max(50, {
        message: "Password must be at most 50 characters.",
    })
})

export default function SignInForm() {
    const [loading, setLoading] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>E-mail</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                {/* <Input type="password" {...field} /> */}
                                <Password {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="w-full" type="submit" size="sm" disabled={loading}>
                    {loading && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
                    Sign In
                </Button>
                <Button type="button" asChild variant="link">
                    <Link href="/sign-up">No Account ?</Link>
                </Button>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center"><Separator /></div>
                    <div className="relative flex justify-center text-xs uppercase"><span className="bg-background px-2 text-muted-foreground">Or continue with</span></div>
                </div>
                <Button type="button" className="w-full" variant="outline" disabled>
                    {loading ? <LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> : <GoogleLogo />}
                    Google
                </Button>
            </form>
        </Form >
    )
}

function GoogleLogo() {
    return (
        <svg className="w-4 h-4 mr-2" fill="#000000" height="16px" width="16px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 210 210" xmlSpace="preserve">
            <path d="M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40c-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105S0,162.897,0,105z" />
        </svg>
    )
}