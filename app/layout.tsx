import './globals.scss'
import {Outfit} from 'next/font/google'
import React from "react";
import Navbar from "@/widgets/Navbar/Navbar";
import {NextAuthProvider} from "@/entities/NextAuthProvider/NextAuthProvider";

const inter = Outfit({subsets: ['latin']})

export const metadata = {
    title: 'Home | Filmeo',
    description: 'Watch all the best movies here',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
        <body className={[inter.className, "flex flex-row"].join(" ")}>
            <NextAuthProvider>
                <Navbar/>
                <div className={"lg:pl-24 lg:mb-5 mb-24 min-w-full flex flex-col overflow-hidden items-center"}>
                    <div className={"2xl:max-w-7xl 2xl:min-w-[80rem] min-w-full max-w-full pt-8 lg:px-12 px-3"}>
                        {children}
                    </div>
                </div>
            </NextAuthProvider>
        </body>
        </html>
    )
}
