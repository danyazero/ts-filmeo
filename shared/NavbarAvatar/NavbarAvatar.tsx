import React, {FC} from 'react';
import Image from "next/image";
import Link from "next/link";
import st from "./NavbarAvatar.module.scss"
import {direction} from "@/Models/Models";

export const NavbarAvatar: FC<{link: string, avatar: string | null | undefined, username: string}> = (props) => {
    return (
        <>
            <Link className={st.link} href={props.link}>
                <Image className={st.avatar} src={props.avatar ? direction + props.avatar : direction + "/assets/users/standart.jpeg"} alt={props.username} width={50} height={50}/>
            </Link>
        </>
    );
}