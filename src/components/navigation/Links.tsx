'use client'
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface LinksProps {
    isVertical?: boolean,
    onClick?: () => void,
}

const Links:React.FC<LinksProps> = ({isVertical = false, onClick}) => {

    console.log(usePathname())
    return <>
        <ul className={`flex gap-2 lg:gap-4 ${isVertical ? 'flex-col gap-6' : ''}`}>
            {links.map((link,idx)=>(
                <button key={idx} className={`capitalize text-black md:text-neutral-500`}>
                    <Link href={link.href} onClick={onClick}>{link.lable}</Link>
                </button>
            ))}
        </ul>
    </>;
};

export default Links;

const links = [
    {
        lable: "home",
        href: "#hero",
    },
    {
        lable: "about",
        href: "#about",
    },
    {
        lable: "contact",
        href: "#contact",
    },
    {
        lable: "blog",
        href: "#blog",
    },
    {
        lable: "careers",
        href: "#careers",
    },
];
