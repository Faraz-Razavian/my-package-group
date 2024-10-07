"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"

import {Button} from "@/components/ui/button"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"

const FormSchema = z.object({
    groupName: z.string().min(2, {
        message: "Group Name must be at least 2 characters.",
    }),
})

export function GroupNameColOne() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            groupName: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log("payload", data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                <FormField
                    control={form.control}
                    name="groupName"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Group Name</FormLabel>
                            <div className="w-full flex items-center gap-4">
                                <FormControl>
                                    <Input className="!bg-white" placeholder="Your Group Name" {...field} />
                                </FormControl>
                                <Button className="!bg-primaryColor !text-white" type="submit">Checking</Button>
                            </div>
                            <FormDescription>
                                This is the name that will be displayed on your profile and in emails.
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}/>
            </form>
        </Form>
    )
}
