"use client"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import { ArrowLeft, LoaderCircle } from "lucide-react"
import Link from "next/link"

const formSchema = z.object({
    email: z.string().min(1, {
        message: "E-mail is required.",
    }).email({
        message: "Invalid e-mail address.",
    }),
})

export default function SignUpForm() {
    const [loading, setLoading] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        // setLoading(true);
        // try {
        //     const res = await signIn('credentials', { redirect: false, ...values });
        //     setLoading(false);
        //     if (res && res.error) {
        //         throw new Error();
        //     }
        // } catch (error) {
        //     setLoading(false);
        //     throw new Error("Invalid credentials.")
        // }
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
                <div className="flex gap-4">
                    <Button type="button" asChild variant="secondary" className="w-full">
                        <Link href="/sign-in"><ArrowLeft className="w-4 h-4 mr-2" />Sign In</Link>
                    </Button>
                    <Button className="w-full" type="submit" size="sm" disabled={loading}>
                        {loading && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
                        Create account
                    </Button>
                </div>
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