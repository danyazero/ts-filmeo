import React, {FC, ReactNode} from 'react';
import st from "./GridCards.module.scss"
export const GridCards: FC<{children: ReactNode, header: string}> = (props) => {

    return (
        <>
            {props.children ? <div className={st.cardsGridContainer}><h2 className={st.header}>{props.header}</h2>
            <div className={st.moviesCards}>
                {props.children}
            </div></div> : <></>}
        </>
    );
}
