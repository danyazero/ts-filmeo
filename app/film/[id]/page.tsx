import Image from 'next/image'
import MovieCard from "@/entities/MovieCard/MovieCard";
import {FC} from "react";
import {IFilm} from "@/Models/Models";
import {HotCard} from "@/entities/HotCard/HotCard";
import st from "./FilmPage.module.scss"
import {FilmData} from "@/shared/FilmData/FilmData";
import {BackButton} from "@/shared/BackButton/BackButton";

async function getData(index: string){
    const response = await fetch('http://localhost:3303/movies/' + index, {
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

export async function generateMetadata({params: {id}}: Props){
    const film: IFilm = await getData(id)

    return{
        title: film.name + " | Filmeo"
    }
}

export default async function FilmPage(props: Props){
    const film: IFilm = await getData(props.params.id)

    return (
        <>
            <BackButton/>
            <h2 className={st.movieName}>{film.name}</h2>
            <div className={st.container}>
                <div className={"w-9/12"}><iframe width={900} className={"max-w-full"}  height={500} src={film.trailer + "?rel=0&border=0"} allowFullScreen={false}/></div>
                <HotCard>
                    <FilmData caption={film.caption} name={film.name} year={film.year} country={film.country} genre={film.genre} runtime={film.runtime} rating={film.rating}/>
                </HotCard>
            </div>
        </>
    )
}
