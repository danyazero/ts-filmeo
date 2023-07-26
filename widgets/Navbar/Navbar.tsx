"use client";
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import st from ".//Navbar.module.scss"
import {usePathname, useRouter} from "next/navigation";
import {signOut, useSession} from "next-auth/react";
import {AuthButton} from "@/shared/AuthButton/AuthButton";

function Navbar() {

    const navigation = [
        {href: "/", src: "/home.svg", alt: "home"},
        {href: "/search/1/all", src: "/search.svg", alt: "search"},
        {href: "/history", src: "/history.svg", alt: "history"}
    ]

    const pathname = usePathname();
    const {push} = useRouter()
    const { data: session } = useSession();

    return (
        <nav className={st.navbar}>
            <div className={st.items}>
                {navigation.map(({href, src, alt}, index) => <Link key={"navbar-item_" + index} href={href} className={st.link + (pathname == href ? " " + st.active : "")}><Image className={st.icon} src={src} priority={true} alt={alt} width={20} height={20}/></Link>)}
            </div>
            <div className={st.link}>{session?.user?.name ? <AuthButton onClick={() => signOut()}/> : <AuthButton onClick={() => push('/auth')}/>}</div>
        </nav>
    );
}

export default Navbar;