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
        title: "My Package",
        src: "/package"
    },
    {
        title: "My Package",
        src: "/"
    },
    {
        title: "My Wallet",
        src: "/wallet"
    },
    {
        title: "Notification",
        src: "/notification"
    },
    {
        title: "Affiliate",
        src: "/affiliate"
    }
]

const Navbar: React.FC = () => {
    const router = useRouter()

    return (
        <div className="w-full bg-gray-100 flex">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        {navItems.map((row, index) => {
                            const itemClassNames = classNames({
                                "!bg-white !rounded-b-none !rounded-t-2xl !text-primaryColor": router.pathname === row.src,
                                "!bg-transparent hover:!text-primaryColor": router.pathname !== row.src,
                                [navigationMenuTriggerStyle()]: true
                            })
                            return (
                                <Fragment key={index}>
                                    <Link href={row.src} legacyBehavior passHref>
                                        <NavigationMenuLink className={itemClassNames}>
                                            {row.title}
                                        </NavigationMenuLink>
                                    </Link>
                                </Fragment>
                            )
                        })}
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
};

export default Navbar;