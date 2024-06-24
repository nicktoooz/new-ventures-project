import type {Metadata} from "next";
import {Inter} from "next/font/google";
import Header from "@/app/Header";
import Footer from "@/app/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Generated by create next app",
};

export default function Layout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header/>
                    {children}
                <Footer/>
            </body>
        </html>
    );
}
