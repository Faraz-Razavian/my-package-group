import Image from "next/image";
import info from "@/asset/images/info.svg";
import React from "react";
import {MembersFrom} from "@/views/package/group-trading/setting/MembersFrom";

const data = [
    {
        label: "Member 1",
        isEdit: true,
        defaultValues: {
            email: "",
            username: ""
        }
    },
    {
        label: "Member 2",
        isRequest: true,
        defaultValues: {
            email: "jackson.lee@email.com",
            username: "Jackson Lee"
        }
    },
]

export function Invitation() {

    return (
        <div className="bg-white w-full h-full">
            <div className="w-full flex justify-center flex-col h-full border-b sizeScreen gap-8 py-10">
                <div className="w-full">
                    <div className="flex items-center gap-4">
                        <h1 className="font-bold text-2xl">Invitation</h1>
                        <Image className="object-contain" src={info} alt="info" width={16} height={16}></Image>
                    </div>
                    <span className="text-gray-400">This is how others will see you on the site.</span>
                </div>
                {data?.map((item, index) => (
                    <MembersFrom item={item} key={index}/>
                ))}
            </div>
        </div>
    )
}