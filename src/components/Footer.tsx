import React from "react";
import Logo from "./Logo";
import SociaolMediaLinks from "./SociaolMediaLinks";
import { Section, Container } from "./SectionContainer";
import Links from "./navigation/Links";

const Footer = () => {
    return (
        <>
            <Section>
                <Container>
                    <div>
                        <div>
                            <Logo />
                            <SociaolMediaLinks src="facebook" />
                            <SociaolMediaLinks src="youtube" />
                            <SociaolMediaLinks src="twitter" />
                            <SociaolMediaLinks src="pinterest" />
                            <SociaolMediaLinks src="instagram" />
                        </div>
                        <div>
                            <Links />
                        </div>
                        <div>
                            <button>request invite</button>
                            <p>&copy; easybank. all rights reserved</p>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
};

export default Footer;
