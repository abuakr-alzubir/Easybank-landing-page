import React from "react";
import Link from "next/link";

const LinksFooter = ({isMobile=false}: {isMobile?:boolean}) => {
    return (
        <>
            <ul className={`flex flex-col flex-wrap h-24 gap-4 text-sm ${isMobile? "flex-nowrap h-52" :""}`}>
                {links.map((link, idx) => (
                    <button
                        key={idx}
                        className={`capitalize text-slate-200
                        
                        `}
                    >
                        <Link href={link.href}>{link.lable}</Link>
                    </button>
                ))}
            </ul>
        </>
    );
};

export default LinksFooter;

const links = [
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
    {
        lable: "support",
        href: "#support",
    },
    {
        lable: "privcy policy",
        href: "#privcy",
    },
];
