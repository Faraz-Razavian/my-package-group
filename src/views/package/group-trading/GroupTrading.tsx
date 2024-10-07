import React from "react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import share from "asset/images/share.svg"
import info from "asset/images/info.svg"
import GroupTradingNavbar from "@/views/package/group-trading/GroupTradingNavbar";
import MyPackageNavbar from "@/views/package/MyPackageNavbar";

const GroupTrading: React.FC = ({children}) => {
    return (
        <MyPackageNavbar>
            <div className="w-full">
                <div className="relative bg-gradient-to-r from-gray-200 via-orange-100 to-gray-200 h-[78px] w-full">
                    <div className="absolute -bottom-14 left-24 flex items-end gap-4">
                        <Avatar className="!w-20 !h-20">
                            <AvatarImage src="https://github.com/shadcn.png"/>
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <div>
                                <b>Jackson Lee</b> / Admin
                            </div>
                            <div>
                                jackson.lee@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-full flex justify-center h-32 border-b">
                    <div className="w-full flex justify-center items-end flex-col gap-2 sizeScreen">
                        <span>Affiliate number</span>
                        <Button className="gap-2 !text-primaryColor">
                            BC010101
                            <Image src={share} alt="share" width={20} height={20}></Image>
                        </Button>
                    </div>
                </div>
                <div className="bg-white w-full h-32">
                    <div className="w-full flex justify-center flex-col h-full border-b sizeScreen">
                        <div className="flex items-center gap-4">
                            <h1 className="font-bold text-2xl">Setting Group Trading</h1>
                            <Image className="object-contain" src={info} alt="info" width={16} height={16}></Image>
                        </div>
                        Update your account settings. Set your personal info and location.
                    </div>
                </div>
                <GroupTradingNavbar/>
            </div>
            {children}
        </MyPackageNavbar>
    );
};

export default GroupTrading;