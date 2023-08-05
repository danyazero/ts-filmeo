'use client'
import React, {FC, ReactNode, useState} from 'react';
import st from "./SeasonsContainer.module.scss"

export const SeasonsContainer: FC<{children: ReactNode[]}> = (props) => {
    const [show, setShow] = useState<boolean>(false)
    return (
        <>
            <div className={st.seasonsList}>
                {props.children.slice(0, 4)}
            </div>
            <div style={{display: show ? 'flex' : 'none', marginTop: '0.5rem'}} className={st.seasonsList}>
                {props.children.slice(4)}
            </div>
            {!show && <p className={st.more} onClick={() => setShow(true)}>show all</p>}
        </>
    );
}