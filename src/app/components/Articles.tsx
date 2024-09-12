import React from "react";
import { Section, Container } from "@/components/SectionContainer";
import Image from "next/image";

const Articles = () => {
    return (
        <>
            <Section className="bg-neutral-50">
                <Container>
                    <h2>latest articles</h2>
                    <article>
                        {data.map((item, idex) => (
                            <div key={idex}>
                                <Image
                                    src={item.image}
                                    alt="article"
                                    width={0}
                                    height={0}
                                    priority
                                    sizes="100vw"
                                    className="w-12"
                                />
                                <div>
                                    <span>{item.writter}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </article>
                </Container>
            </Section>
        </>
    );
};

export default Articles;

const data = [
    {
        image: "/images/image-currency.jpg",
        writter: "By Claire Robinson",
        title: "Receive money in any currency with no fees ",
        desc: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    },
    {
        image: "/images/image-restaurant.jpg",
        writter: "By Wilson Hutton",
        title: "Treat yourself without worrying about money",
        desc: " Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    },
    {
        image: "/images/image-plane.jpg",
        writter: "By Wilson Hutton",
        title: "Take your Easybank card wherever you go",
        desc: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    },
    {
        image: "/images/image-confetti.jpg",
        writter: "By Claire Robinson",
        title: "Our invite-only Beta accounts are now live!",
        desc: " After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    },
];
