import React, {FC} from 'react';
import {FilmPoster} from "@/entities/FilmPoster";
import st from "./MovieHeader.module.scss";
import {SaveMovie} from "@/features/SaveMovie";
import {IMovieHeader} from "@/widgets/MovieHeader/model/MovieHeader.interface";

export const MovieHeader: FC<IMovieHeader> = (props) => {
    return (
        <>
            <div className={st.container}>
                <FilmPoster large={false} id={props.id} name={props.name} poster={props.poster} cover={props.cover}>
                    <div className={st.header}>
                        <h2 className={st.movieName}>{props.name}</h2>
                        <div className={st.saveButton}>
                            <SaveMovie/>
                        </div>
                    </div>
                </FilmPoster>
            </div>
        </>
    );
}