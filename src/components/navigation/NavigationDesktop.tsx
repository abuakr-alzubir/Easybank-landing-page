import React from "react";
import Links from "./Links";
import { Container } from "../SectionContainer";
import Logo from "../Logo";

const NavigationDesktop = () => {
    return (
        <>
            <Container className="hidden md:block">
                <div className="flex items-center justify-between py-6">
                    <Logo />
                    <nav>
                        <Links />
                    </nav>
                    <button className="bg-gradient-to-tr from-blue-300 to-green-500 rounded-full py-1 px-2 text-xs capitalize text-white">request invite</button>
                </div>
            </Container>
        </>
    );
};

export default NavigationDesktop;
