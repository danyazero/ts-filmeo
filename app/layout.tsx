import './globals.scss'
import {Outfit} from 'next/font/google'
import React from "react";
import Navbar from "@/widgets/Navbar/Navbar";

const inter = Outfit({subsets: ['latin']})

export const metadata = {
    title: 'Home | Filmeo',
    description: 'Watch all the best movies here',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={[inter.className, "flex flex-row"].join(" ")}>
        <Navbar/>
        <div className={"ml-24 w-full flex flex-col items-center"}>
            <div className={"max-w-7xl w-[80rem] pt-8"}>
                {children}
            </div>
        </div>
        </body>
        </html>
    )
}
