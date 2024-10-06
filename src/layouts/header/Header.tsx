import React from "react";
import Image from "next/image";
import logo from "@/asset/images/logo.svg";
import avatar from "@/asset/images/avatar.svg";
import notification from "@/asset/images/notification.svg";
import search from "@/asset/images/search.svg";

function Header() {
    return (
        <div className="w-full flex items-center sm:justify-between justify-center shadow h-14 sm:px-5 px-0">
            <div className="flex">
                <Image
                    className="object-contain"
                    src={logo}
                    height={50}
                    width={181}
                    alt="logo"/>
            </div>
            <div className="flex sm:gap-10 gap-4">
                <Image
                    className="object-contain"
                    src={search}
                    height={18}
                    width={18}
                    alt="search icon"/>
                <Image
                    className="object-contain"
                    src={notification}
                    height={18}
                    width={20}
                    alt="notification icon"/>
                <Image
                    className="object-contain"
                    src={avatar}
                    height={40}
                    width={40}
                    alt="user avatar"/>
            </div>
        </div>
    );
}

export default Header;
