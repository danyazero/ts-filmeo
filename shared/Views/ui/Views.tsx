import React, {FC} from 'react';
import st from "./Views.module.scss";
import Image from "next/image";
import {IRating} from "@/shared/Rating/Rating.interface";

export const Views: FC<{views: number}> = (props) => {
    return (
        <div className={st.views}>
            <Image className={st.eye} src={"/views.svg"} alt={"rating"} width={13} height={13}/>
            <p className={st.wiewsNumber}>{props.views}</p>
        </div>
    );
}