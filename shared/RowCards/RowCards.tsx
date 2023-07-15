import React, {FC, ReactNode} from 'react';
import st from "./RowCards.module.scss"
import {MoreButton} from "@/shared/moreButton/moreButton";

export const RowCards: FC<{children: ReactNode, link?: string, header: string}> = async (props) => {

    return (
        <>
            {props.children ? <><div className={st.headerContainer}>
                    <h2>{props.header}</h2>
                    {props.link && <MoreButton link={props.link}/>}
                </div>
                <div className={st.moviesCards}>
                    {props.children}
                </div></> : <></>}
        </>
    );
}
