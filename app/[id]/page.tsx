import Image from 'next/image'
import MovieCard from "@/shared/MovieCard/MovieCard";
import {FC} from "react";
import {IFilm} from "@/Models/Models";
import {FilmData} from "@/entities/FilmData/FilmData";
import st from ".//FilmPage.module.scss"

async function getData(index: string){
    const response = await fetch('https://my-json-server.typicode.com/danyazero/films-json/movies/' + index, {
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
        title: film.name
    }
}

export default async function FilmPage(props: Props){
    const film: IFilm = await getData(props.params.id)

    return (
        <>
            <h2 className={st.movieName}>{film.name}</h2>
            <div className={st.container}>
                <div className={"w-9/12"}><iframe width={"900"} className={"max-w-full"}  height={500} src={film.trailer} allowFullScreen={false}/></div>
                <FilmData name={film.name} year={film.year} country={film.country} genre={film.genre} runtime={film.runtime} rating={film.rating}/>
            </div>
        </>
    )
}
