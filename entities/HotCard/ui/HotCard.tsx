import React, {FC} from 'react';
import st from "./HotCard.module.scss"
import {IHotCard} from "@/entities/HotCard/HotCard.interface";

export const HotCard: FC<IHotCard> = (props) => {
    return (
        <div className={st.background}>
            <div className={st.filmData}>
                {props.children}
            </div>
        </div>
    );
};