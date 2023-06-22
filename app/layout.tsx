import './globals.scss'
import { Outfit } from 'next/font/google'
import React from "react";
import Navbar from "@/widgets/Navbar/Navbar";

const inter = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Home',
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
          <div style={{marginLeft: "115px"}}>{children}</div>
      </body>
    </html>
  )
}
