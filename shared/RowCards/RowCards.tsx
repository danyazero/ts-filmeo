import React, {FC, ReactNode} from 'react';
import st from "./RowCards.module.scss"
import {MoreButton} from "@/shared/moreButton/moreButton";

export const RowCards: FC<{children: ReactNode, link?: string, header: string}> = async (props) => {

    return (
        <>
            <div className={st.headerContainer}>
                <h2 className={st.header}>{props.header}</h2>
                {props.link && <MoreButton link={props.link}/>}
            </div>
            <div className={st.moviesCards}>
                {props.children}
            </div>
        </>
    );
}
