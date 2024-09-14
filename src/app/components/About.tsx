import Image from "next/image";
import React from "react";
import { Section, Container } from "@/components/SectionContainer";

const About = () => {
    return (
        <>
            <Section id="about" className="bg-neutral-100">
                <Container>
                    <article className="text-center">
                        <h2 className="text-slate-900 opacity-75 capitalize py-4 text-3xl">why choose Easybank?</h2>
                        <p className="text-slate-500">
                            
                            We leverage Open Banking to turn your bank account
                            into your financial hub. Control your finances like
                            never before.
                        </p>
                    </article>
                    <article className="grid grid-cols-1 lg:grid-cols-4 items-center justify-center p-4 gap-4 lg:gap-8">
                        {data.map((item, idx) => (
                            <div key={idx} className="flex flex-col gap-4 items-center lg:items-start justify-centre text-center lg:text-left">
                                <Image
                                    src={item.image}
                                    alt="data"
                                    width={0}
                                    height={0}
                                    priority
                                    sizes="100vw"
                                    className="w-20"
                                />
                                <h3 className="text-3xl lg:text-2xl capitalize text-slate-900 opacity-75">{item.title}</h3>
                                <p>{item.des}</p>
                            </div>
                        ))}
                    </article>
                </Container>
            </Section>
        </>
    );
};

export default About;

const data = [
    {
        image: "/images/icon-online.svg",
        title: "online banking",
        des: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    },
    {
        image: "/images/icon-budgeting.svg",
        title: "simple budgeting",
        des: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    },
    {
        image: "/images/icon-onboarding.svg",
        title: "fast onboarding",
        des: "  Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    },
    {
        image: "/images/icon-api.svg",
        title: "open API",
        des: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    },
];
