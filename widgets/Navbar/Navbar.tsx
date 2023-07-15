"use client";
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import st from ".//Navbar.module.scss"
import {usePathname} from "next/navigation";
import {useSession} from "next-auth/react";
import {LoginButton} from "@/shared/LoginButton/LoginButton";

function Navbar() {

    const navigation = [
        {href: "/", src: "/home.svg", alt: "home"},
        {href: "/search/1/all", src: "/search.svg", alt: "search"},
        {href: "/history", src: "/history.svg", alt: "history"}
    ]

    const pathname = usePathname();
    const { data: session } = useSession();

    return (
        <nav className={st.navbar}>
            {session?.user?.name ? <p>{session?.user?.name}</p> : <LoginButton/>}
            {navigation.map(({href, src, alt}, index) => <Link key={"navbar-item_" + index} href={href} className={st.link + (pathname == href ? " " + st.active : "")}><Image className={st.icon} src={src} priority={true} alt={alt} width={20} height={20}/></Link>)}
        </nav>
    );
}

export default Navbar;