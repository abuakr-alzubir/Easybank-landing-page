"use client";
import React from "react";
import Links from "./Links";
import Logo from "../Logo";
import { Container } from "../SectionContainer";
import Image from "next/image";

const Navigation = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
            <Container className="md:hidden p-4 md:px-0 md:relative">
                <div className="flex justify-between items-center">
                    <Logo />
                    <button
                        className="lg:hidden"
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        {isOpen ? (
                            <Image
                                src="/images/icon-close.svg"
                                alt="menu burger"
                                width={30}
                                height={30}
                                className="w-auto h-auto"
                            />
                        ) : (
                            <Image
                                src="/images/icon-hamburger.svg"
                                alt="menu burger"
                                width={50}
                                height={50}
                                className="pt-2 w-auto h-auto"
                            />
                        )}
                    </button>
                </div>

                {isOpen && (
                    <div className="absolute top-8 z-20 left-0 w-full p-8 mt-6">
                        <nav className="flex justify-center items-center p-8 bg-white">
                            <Links onClick={()=>setIsOpen(false)} isVertical />
                        </nav>
                    </div>
                )}
            </Container>
        </>
    );
};

export default Navigation;
