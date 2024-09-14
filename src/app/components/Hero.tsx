import Image from "next/image";
import React from "react";
import { Section, Container } from "@/components/SectionContainer";
import mobile from "../../../public/images/bg-intro-mobile.svg";
import desktop from "../../../public/images/bg-intro-desktop.svg";
import mockups from "../../../public/images/image-mockups.png";
import Button from "@/components/Button";

const Hero = () => {
    return (
        <>
            <Section id="hero">
                <div className="grid grid-cols-1 md:grid-cols-[40rem_1fr] gap-4">
                    <article className="flex flex-col gap-4 items-center justify-center text-center order-2 md:order-none">
                        <Container className="max-w-6xl flex flex-col gap-4">
                            <h2 className="text-4xl lg:text-6xl -mt-4 text-slate-900 opacity-75">
                                Next generation digital banking
                            </h2>
                            <p className="text-slate-500 md:max-w-none">
                                Take your financial life online. Your Easybank
                                account will be a one-stop-shop for spending,
                                saving, budgeting, investing, and much more.
                            </p>
                        </Container>
                        <Button />
                    </article>
                    <article className="order-1 md:order-none relative overflow-hidden">
                        <Image
                            src={mobile}
                            className="md:hidden w-full"
                            alt="intro"
                        />
                        <Image
                            src={desktop}
                            className="hidden relative lg:block -top-36 -right-20 w-full h-auto"
                            alt="intro"
                        />
                        <Image
                            src={mockups}
                            className="w-auto absolute -top-32 md:hidden "
                            alt="intro"
                        />
                        <Image
                            src={mockups}
                            className="w-auto absolute -top-52 z-10 hidden -right-40 lg:block"
                            alt="intro"
                        />
                    </article>
                </div>
            </Section>
        </>
    );
};

export default Hero;
