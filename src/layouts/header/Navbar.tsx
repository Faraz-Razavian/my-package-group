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

interface NavItem {
    title: string;
    src: string;
}

const navItems: NavItem[] = [
    {
        title: "My Profile",
        src: "/profile"
    },
    {
        title: "My Package",
        src: "/package"
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
];

const Navbar: React.FC = () => {
    const router = useRouter();
    const rootPath = `/${router.pathname?.split("/")?.[1]}`;

    return (
        <div className="w-full flex px-10">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        {navItems.map((row: NavItem, index: number) => {
                            const itemClassNames = classNames({
                                "!bg-white !rounded-b-none !rounded-t-2xl !text-primaryColor": rootPath === row.src,
                                "!bg-transparent hover:!text-primaryColor": rootPath !== row.src,
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
    );
};

export default Navbar;