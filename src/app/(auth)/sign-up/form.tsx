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