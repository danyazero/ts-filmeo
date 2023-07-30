import React, {FC} from 'react';
import st from "./FilmPoster.module.scss"
import Image from "next/image";
import {IFilmPoster} from "@/entities/FilmPoster/FilmPoster.interface";
import Link from "next/link";
import {imageSizeSelector} from "@/Models/utils/imageSizeSelector";
import {direction} from "@/Models/Models";

export const FilmPoster: FC<IFilmPoster & { large: boolean }> = (props) => {
    return (
        <div className={st.recommendedMovie}>
                <Image className={st.cover} src={direction + props.cover} width={300} height={160} alt={props.name}/>
                <div className={st.infoBlock}>
                    <Image className={st.poster} src={direction + imageSizeSelector(props.poster, props.large)} alt={props.name}
                           height={160} width={80}/>
                    {props.children}
                </div>
        </div>
    );
}
