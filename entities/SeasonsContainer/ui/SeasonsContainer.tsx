'use client'
import React, {FC, ReactNode, useState} from 'react';
import st from "./SeasonsContainer.module.scss"
import {VerticalCards} from "@/shared/VerticalCards";

export const SeasonsContainer: FC<{children: ReactNode[]}> = (props) => {
    const [show, setShow] = useState<boolean>(false)
    return (
        <>
            <VerticalCards>
                {props.children.slice(0, 4)}
            </VerticalCards>
            <VerticalCards style={{display: show ? 'flex' : 'none', marginTop: '0.5rem'}}>
                {props.children.slice(4)}
            </VerticalCards>
            {!show && props.children.length > 3 ? <p className={st.more} onClick={() => setShow(true)}>show all</p> : <></>}
        </>
    );
}