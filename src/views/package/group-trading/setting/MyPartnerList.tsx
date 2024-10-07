import Image, {StaticImageData} from "next/image";
import info from "@/asset/images/info.svg";
import React from "react";
import {MembersFrom} from "@/views/package/group-trading/setting/MembersFrom";
import avatarImageMem3 from "@/asset/images/AvatarImageMem3.svg"
import avatarImageMem4 from "@/asset/images/AvatarImageMem4.svg"
import avatarImageMem5 from "@/asset/images/AvatarImageMem5.svg"
import {Button} from "@/components/ui/button";

interface MemberData {
    label: string;
    isDelete?: boolean;
    isConfirm?: boolean;
    defaultValues: {
        email: string;
        username: string;
    };
    img: StaticImageData;
    showStatusBtn: {
        title: string;
        className: string;
    };
}

const data: MemberData[] = [
    {
        label: "Member 3",
        isDelete: true,
        defaultValues: {
            email: "isabella.nguyen@email.com",
            username: "Isabella Nguyen"
        },
        img: avatarImageMem3,
        showStatusBtn: {
            title: "shared Wallet",
            className: "!text-primaryColor !border !border-primaryColor !bg-white !w-1/6"
        }
    },
    {
        label: "Member 4",
        isDelete: true,
        defaultValues: {
            email: "will@email.com",
            username: "William Kim"
        },
        img: avatarImageMem4,
        showStatusBtn: {
            title: "Unshared Wallet",
            className: "!bg-transparent !w-1/6"
        }
    },
    {
        label: "Member 5",
        isConfirm: true,
        defaultValues: {
            email: "sofia.davis@email.com",
            username: "William Kim"
        },
        img: avatarImageMem5,
        showStatusBtn: {
            title: "Reject",
            className: "!bg-gray-200 !w-max !w-1/6"
        }
    },
]

export function MyPartnerList() {

    return (
        <div className="bg-white w-full h-full">
            <div className="w-full flex justify-center flex-col h-full border-b sizeScreen gap-8 py-10">
                <div className="w-full">
                    <div className="flex items-center gap-4">
                        <h1 className="font-bold text-2xl">My Partner List</h1>
                        <Image className="object-contain" src={info} alt="info" width={16} height={16}></Image>
                    </div>
                    <span className="text-gray-400">This is how others will see you on the site.</span>
                </div>
                {data?.map((item, index) => (
                    <MembersFrom item={item} key={index}/>
                ))}
                <Button className="!bg-primaryColor w-max !text-white">Update Group</Button>
            </div>
        </div>
    )
}