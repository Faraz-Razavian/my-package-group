import Image from "next/image";
import React from "react";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import eraser from "@/asset/images/eraser.svg"
import crossCircled from "@/asset/images/crossCircled.svg"
import classNames from "classnames";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export function MembersFrom({item}) {
    const FormSchema = z.object({
        email: z.string().min(2, {
            message: "Email must be at least 2 characters.",
        }),
        username: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
    })
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: item?.defaultValues,
        mode: "onTouched"
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log("payload", data)
    }

    const buttonClassName = classNames({
        "border !w-1/6": true,
        "!bg-white ": item.isEdit,
        "!bg-primaryColor !text-white": item.isRequest,
        "!bg-danger !text-white": item.isDelete,
        "!bg-success !text-white": item.isConfirm
    })

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2 lg:w-2/3 w-full">
                <FormLabel>{item?.label}</FormLabel>
                <div className="w-full flex gap-4">
                    <Avatar className="!w-10 !h-10">
                        <AvatarImage src={item.img?.src}/>
                        <AvatarFallback className="!bg-gray-400"/>
                    </Avatar>
                    <div className="w-full flex gap-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem className="w-2/3">
                                    <div className="w-full flex items-center gap-4">
                                        <FormControl>
                                            <div className="relative w-full">
                                                <Input
                                                    className="!bg-white"
                                                    placeholder="Email Address"
                                                    {...field}/>
                                                {!item?.isShowMembersList && (
                                                    <Image
                                                        className="absolute right-3 top-3"
                                                        src={!item?.isEdit ? crossCircled : eraser}
                                                        alt={!item?.isEdit ? "crossCircled" : "eraser"}
                                                        width={16}
                                                        height={16}/>
                                                )}
                                            </div>
                                        </FormControl>
                                    </div>
                                    <FormMessage/>
                                </FormItem>
                            )}/>
                        <FormField
                            control={form.control}
                            name="username"
                            render={({field}) => (
                                <FormItem className="w-1/2">
                                    <div className="w-full flex items-center gap-4">
                                        <FormControl>
                                            <div className="relative w-full">
                                                <Input
                                                    className="!bg-white"
                                                    placeholder="User name"
                                                    {...field}/>
                                                {!item?.isShowMembersList && (
                                                    <Image
                                                        className="absolute right-3 top-3"
                                                        src={!item?.isEdit ? crossCircled : eraser}
                                                        alt={!item?.isEdit ? "crossCircled" : "eraser"}
                                                        width={16}
                                                        height={16}/>
                                                )}
                                            </div>
                                        </FormControl>
                                    </div>
                                    <FormMessage/>
                                </FormItem>
                            )}/>
                        <Button
                            className={buttonClassName}
                            type="submit">
                            {item?.isEdit ? "Edit" : item?.isRequest ? "Request" : item?.isDelete ? "Delete" : "Confirm"}
                        </Button>
                        {item?.showStatusBtn &&
                          <Button
                            className={item?.showStatus?.className}
                            type="submit">
                              {item?.showStatus?.title}
                          </Button>
                        }
                    </div>
                </div>
            </form>
        </Form>
    )
}