'use client'
import React, {FC} from 'react';
import st from "./RateMovie.module.scss"
import {setMovieRating} from "@/features/RateMovie/api/setMovierating";
import Image from "next/image";

export const RateMovie: FC<{movie: number, close(): void}> = (props) => {

    async function setRating(rate: number){
        const response = await setMovieRating(props.movie, rate)
        console.log(response)
        props.close()
    }

    return (
        <>
            <div className={st.container}>
                <div className={st.rateMovie}>
                    <div className={st.header}>
                        <h2>Your rate:</h2>
                        <Image onClick={props.close} className={st.close} src={'/close.svg'} alt={'close rate widget'} width={20} height={20}/>
                    </div>
                    <div className={st.rateRow}>
                        {[1,2,3,4,5,6,7,8,9,10].map((element, index) => <div key={"rate_"+index} className={st.rate} onClick={() => setRating(element)}>{element}</div>)}
                    </div>
                    <div className={st.caption}>
                        <p>very bad</p>
                        <p>amazing</p>
                    </div>
                </div>
            </div>
        </>
    );
}