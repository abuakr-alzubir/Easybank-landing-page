import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import NavigationDesktop from "@/components/navigation/NavigationDesktop";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";

const sublic_sans = Public_Sans({
    weight: ["300", "400", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "easybank home page",
    description: "description of easybank home page",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={` ${sublic_sans.className} ${sublic_sans.className} antialiased`}
            >
                <header className="">
                    <NavigationDesktop />
                    <Navigation />
                </header>
                <main>{children}</main>
                <footer>
                    <Footer />
                </footer>
            </body>
        </html>
    );
}
