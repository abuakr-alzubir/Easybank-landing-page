import Image from "next/image";
import React from "react";

type SociaolMediaLinksProps = {
    href?: string;
    src?: string;
    size?: string;
};

const SociaolMediaLinks = ({
    href,
    src,
    size = "40",
}: SociaolMediaLinksProps) => {
    return (
        <>
            <a href={href}>
                <Image
                    src={`/images/icon-${src}.svg`}
                    alt="social media link"
                    width={+size}
                    height={+size}
                    priority
                    className="w-auto h-auto"
                />
            </a>
        </>
    );
};

export default SociaolMediaLinks;
