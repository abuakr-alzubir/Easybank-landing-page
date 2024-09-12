import Image from "next/image";
import React from "react";
import { Section,Container } from "@/components/SectionContainer";

const Hero = () => {
    return (
        <>
            <Section id="hero" className="bg-neutral-50">
                <Container>
                <article>
                    <Image
                        src="/images/bg-intro-desktop.svg"
                        alt="bg"
                        width={0}
                        height={0}
                        priority
                        sizes="100vw"
                        className="w-full"
                    />
                    <Image
                        src="/images/image-mockups.png"
                        alt="bg"
                        width={0}
                        height={0}
                        priority
                        sizes="100vw"
                        className="w-full"
                    />
                </article>
                <article>
                    <h2>
                        Next generation digital banking
                    </h2>
                    <p>
                        Take your financial life online. Your Easybank account
                        will be a one-stop-shop for spending, saving, budgeting,
                        investing, and much more.
                    </p>
                    <button>
                        Request Invite
                    </button>
                </article>
                </Container>
            </Section>
        </>
    );
};

export default Hero;
