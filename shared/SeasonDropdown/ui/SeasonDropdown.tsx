'use client'
import React, {FC, ReactNode, useState} from 'react';
import st from "./SeasonDropdown.module.scss"
import Image from "next/image";

export const SeasonDropdown: FC<{title: string, children: ReactNode[]}> = (props) => {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <>
            <div className={st.button} onClick={() => setOpen(prevState => !prevState)}>
                <Image className={st.icon} src={'/play.svg'} alt={props.title} width={20} height={20}/>
                <h3>{props.title}</h3>
            </div>

            <div className={st.dropdownList} style={{display: open ? 'flex' : 'none'}}>
                {props.children}
            </div>

        </>
    );
}