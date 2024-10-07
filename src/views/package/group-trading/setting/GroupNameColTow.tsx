"use client"

import {Switch} from "@/components/ui/switch";
import {Label} from "@/components/ui/label";
import Image from "next/image";
import info from "@/asset/images/info.svg";
import React from "react";
import {cn} from "@/lib/utils";

export function GroupNameColTwo() {

    return (
        <div className="flex items-center space-x-2 h-full">
            <div className="flex w-full flex-col">
                <div className="flex items-center gap-4">
                    <Switch
                        id="share-wallet"
                        className={cn(
                            "data-[state=checked]:!bg-primaryColor",
                            "data-[state=unchecked]:!bg-gray-400"
                        )}
                    />
                    <Label htmlFor="share-wallet">
                        <div className="flex items-center gap-4 mb-2 mt-5">
                            <h1>Share Wallet</h1>
                            <Image className="object-contain" src={info} alt="info" width={16} height={16}></Image>
                        </div>
                        <span className="text-gray-400">Using another wallet to open a position</span>
                    </Label>
                </div>
            </div>
        </div>
    )
}
