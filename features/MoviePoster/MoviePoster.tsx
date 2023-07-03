'use client'
import React, {FC, useState} from 'react';
import {Recommended} from "@/entities/Recomended/Recommended";
import st from ".//MoviePoster.module.scss"
import {IFilm} from "@/Models/Models";
import Image from "next/image";
import {FilmPoster} from "@/entities/FilmPoster/FilmPoster";

export const MoviePoster: FC<IFilm> = (props) => {
    const [trailer, setTrailer] = useState<boolean>(false)

    return (
        <>
            <div className={st.poster}>
                {trailer ?
                    <iframe width={900} className={"max-w-full"} height={500} src={props.trailer + "?rel=0&border=0"}
                            allowFullScreen={false}/> :
                    <FilmPoster id={props.id} name={props.name} poster={props.poster} cover={props.cover}>
                        <div onClick={() => setTrailer(true)} className={st.trailer}>
                            <Image src={'/play.svg'} alt={'show trailer'} width={30} height={30}/>
                            <h2>Show trailer</h2>
                        </div>
                    </FilmPoster>}

            </div>
        </>
    );
}
