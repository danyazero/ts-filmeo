import React, {FC} from 'react';
import st from ".//Rating.module.scss";
import Image from "next/image";
import {IRating} from "@/shared/Rating/Rating.interface";

export const Rating: FC<IRating> = (props) => {
    return (
        <div className={st.rating}>
            <Image className={st.star} src={"/star.svg"} alt={"rating"} width={13} height={13}/>
            <p className={st.ratingScore}>{props.rating.toFixed(1)}</p>
        </div>
    );
}