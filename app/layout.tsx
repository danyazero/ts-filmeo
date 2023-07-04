import './globals.scss'
import {Outfit} from 'next/font/google'
import React from "react";
import Navbar from "@/widgets/Navbar/Navbar";

const inter = Outfit({subsets: ['latin']})

export const metadata = {
    title: 'Home | Filmeo',
    description: 'Watch all the best movies here',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
        <body className={[inter.className, "flex flex-row"].join(" ")}>
            <Navbar/>
            <div className={"lg:ml-24 lg:mb-5 mb-24 w-full flex flex-col lg:items-center"}>
                <div className={"xl:max-w-7xl max-w-full  pt-8 lg:px-0 px-3"}>
                    {children}
                </div>
            </div>
        </body>
        </html>
    )
}
