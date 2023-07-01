import React, {FC} from 'react';
import {INewsCard} from "@/entities/NewsCard/NewsCard.interface";
import st from "./NewsCard.module.scss"
import Image from "next/image";

export const NewsCard: FC<INewsCard> = (props) => {
    return (
        <div className={st.news}>
            <div>
                <Image className={st.preview} src={props.preview} alt={props.name} width={600} height={320}/>
                <p className={st.newsName}>{props.name}</p>
            </div>
            <p>{props.date}</p>
        </div>
    );
}
