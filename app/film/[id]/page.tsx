import Image from 'next/image'
import MovieCard from "@/entities/MovieCard/MovieCard";
import React, {FC, useState} from "react";
import {IFilm} from "@/Models/Models";
import {HotCard} from "@/entities/HotCard/HotCard";
import st from "./FilmPage.module.scss"
import {FilmData} from "@/entities/FilmData/FilmData";
import {BackButton} from "@/shared/BackButton/BackButton";
import {Comment} from "@/entities/Comment/Comment";
import {Comments} from "@/widgets/Comments/Comments";
import {SaveButton} from "@/shared/SaveButton/SaveButton";
import {log} from "util";
import {SaveMovie} from "@/features/SaveMovie/SaveMovie";
import {SaveHistory} from "@/features/SaveHistory/SaveHistory";
import {Recommended} from "@/entities/Recomended/Recommended";
import {MoviePoster} from "@/features/MoviePoster/MoviePoster";
import {FilmPoster} from "@/entities/FilmPoster/FilmPoster";

async function getData(index: string) {
    const response = await fetch('http://192.168.0.229:3303/movies/' + index, {
        next: {
            revalidate: 120
        }
    })

    return response.json()
}

type Props = {
    params: {
        id: string
    }
}

export async function generateMetadata({params: {id}}: Props) {
    const film: IFilm = await getData(id)

    return {
        title: film.name + " | Filmeo"
    }
}

export default async function FilmPage(props: Props) {
    const film: IFilm = await getData(props.params.id)

    return (
        <>
            <BackButton/>
            <SaveHistory movieId={props.params.id}/>
            <div className={"lg:h-36 h-28 my-8"}>
                <FilmPoster large={false} id={film.id} name={film.name} poster={film.poster} cover={film.cover}>
                        <div className={"w-full flex flex-row justify-between px-3 items-center"}>
                            <h2 className={st.movieName}>{film.name}</h2>
                            <div className={st.saveButton}>
                                <SaveMovie/>
                            </div>
                        </div>
                </FilmPoster>
            </div>

            <div className={st.container}>
                <div className={"lg:w-4/6 w-full h-fit"}>
                    <iframe width={900} className={"max-w-full"} height={450} src={film.trailer + "?rel=0&border=0"}
                            allowFullScreen={false}/>
                </div>
                <HotCard>
                    <FilmData caption={film.caption} name={film.name} year={film.year} country={film.country}
                              genre={film.genre} runtime={film.runtime} rating={film.rating}/>
                </HotCard>
            </div>
            <Comments/>
        </>
    )
}
