import Providers from "@/contexts/Providers";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Smarter Schedule",
    description: "A scheduler application for anyone needs automatic scheduling."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
