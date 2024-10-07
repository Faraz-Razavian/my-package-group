import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import React from "react";
import classNames from "classnames";
import {useRouter} from "next/router";
import SettingIcon from "@/asset/icons/SettingIcon";
import TurnoverIcon from "@/asset/icons/TurnoverIcon";
import ServiceIcon from "@/asset/icons/ServiceIcon";

const navItems = [
    {
        title: "Service",
        src: "/package/group-trading/service",
        icon: <ServiceIcon/>
    },
    {
        title: "Setting",
        src: "/package/group-trading/setting",
        icon: <SettingIcon/>
    },
    {
        title: "Turnover",
        src: "/package/group-trading/turnover",
        icon: <TurnoverIcon/>
    }
];

const GroupTradingNavbar: React.FC = ({children}) => {
    const router = useRouter();

    return (
        <div className="w-full bg-white">
            <div className="w-full flex sizeScreen pt-4 border-b">
                <NavigationMenu>
                    <NavigationMenuList className="gap-8">
                        {navItems.map((row, index) => {
                            const itemClassNames = classNames({
                                "!rounded-none border-b border-gray-400 !text-primaryColor": router.pathname === row.src,
                                "hover:!text-primaryColor": router.pathname !== row.src,
                                "!bg-transparent !py-0 !px-0": true,
                                [navigationMenuTriggerStyle()]: true
                            });
                            return (
                                <NavigationMenuItem key={index}>
                                    <Link href={row.src} legacyBehavior passHref>
                                        <NavigationMenuLink className={itemClassNames}>
                                            <div className="flex items-center gap-2">
                                                {row.icon}
                                                <span>{row.title}</span>
                                            </div>
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            );
                        })}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            {children}
        </div>
    );
};

export default GroupTradingNavbar;
