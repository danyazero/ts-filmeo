import React from 'react';
import Link from "next/link";
import Image from "next/image";
import st from ".//Navbar.module.scss"

function Navbar() {

    const navigation = [
        {href: "/", src: "/home.svg", alt: "home"},
        {href: "/search", src: "/search.svg", alt: "search"}
    ]

    return (
        <nav className={st.navbar}>
            {navigation.map(({href, src, alt}) => <Link href={href} className={st.link}><Image src={src} priority={true} alt={alt} width={25} height={25}/></Link>)}
        </nav>
    );
}

export default Navbar;