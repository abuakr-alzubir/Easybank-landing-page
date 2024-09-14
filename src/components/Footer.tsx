import React from "react";
import Logo from "./Logo";
import SociaolMediaLinks from "./SociaolMediaLinks";
import { Section, Container } from "./SectionContainer";
import Links from "./navigation/Links";
import LinksFooter from "./navigation/LinksFooter";
import Button from "./Button";

const Footer = () => {
    return (
        <>
            <Section className="bg-sky-950">
                <Container className="">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-4 items-center">
                        <div className="flex flex-col items-center justify-between gap-4 md:gap-12">
                            <Logo isFooter />
                            <div className="flex gap-2 items-start">
                                <SociaolMediaLinks src="facebook" />
                                <SociaolMediaLinks src="youtube" />
                                <SociaolMediaLinks src="twitter" />
                                <SociaolMediaLinks src="pinterest" />
                                <SociaolMediaLinks src="instagram" />
                            </div>
                        </div>

                        <div>
                            <LinksFooter isMobile />
                        </div>

                        <div className="flex flex-col gap-2 items-center md:items-end">
                            <Button />
                            <p className="text-slate-200">
                                &copy; easybank. all rights reserved
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
};

export default Footer;
