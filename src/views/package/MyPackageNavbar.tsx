import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import React, {Fragment} from "react";
import classNames from "classnames";
import {useRouter} from "next/router";

const navItems = [
    {
        title: "Group Trading",
        src: "/package/group-trading"
    },
    {
        title: "Live Trade",
        src: "/package/live-trade"
    },
    {
        title: "Backtesting",
        src: "/package/backtesting"
    },
    {
        title: "Signal",
        src: "/package/signal"
    }
];

const MyPackageNavbar: React.FC = ({children}) => {
    const router = useRouter();
    const targetPath = `/${router.pathname?.split("/")?.[2]}`

    return (
        <>
            <div className="w-full flex bg-white">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            {navItems.map((row, index) => {
                                const itemSrc = `/${row.src?.split("/")?.[2]}`
                                const itemClassNames = classNames({
                                    "!rounded-none border-b border-gray-400 !text-primaryColor": targetPath === itemSrc,
                                    "hover:!text-primaryColor": targetPath !== itemSrc,
                                    "!bg-transparent !py-8": true,
                                    [navigationMenuTriggerStyle()]: true
                                });
                                return (
                                    <Fragment key={index}>
                                        <Link href={row.src} legacyBehavior passHref>
                                            <NavigationMenuLink className={itemClassNames}>
                                                {row.title}
                                            </NavigationMenuLink>
                                        </Link>
                                    </Fragment>
                                );
                            })}
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            {children}
        </>
    );
};

export default MyPackageNavbar;
