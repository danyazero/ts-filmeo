import React, {FC} from 'react';
import st from "./FilmPoster.module.scss"
import Image from "next/image";
import {IFilmPoster} from "@/entities/FilmPoster/FilmPoster.interface";
import Link from "next/link";
import {imageSizeSelector} from "@/Models/utils/imageSizeSelector";

export const FilmPoster: FC<IFilmPoster & { large: boolean }> = (props) => {
    return (
        <div className={st.recommendedMovie}>
            <Link href={'/film/' + props.id}>
                <Image className={st.cover} src={props.cover} width={300} height={160} alt={props.name}/>
                <div className={st.infoBlock}>
                    <Image className={st.poster} src={imageSizeSelector(props.poster, props.large)} alt={props.name}
                           height={160} width={80}/>
                    {props.children}
                </div>
            </Link>
        </div>
    );
}
