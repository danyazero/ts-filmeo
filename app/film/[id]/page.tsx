import React from "react";
import {direction, IFilm, IRole, myDirection} from "@/Models/Models";
import {HotCard} from "@/entities/HotCard/HotCard";
import st from "./FilmPage.module.scss"
import {FilmData} from "@/entities/FilmData/FilmData";
import {BackButton} from "@/shared/BackButton/BackButton";
import {Comments} from "@/widgets/Comments/Comments";
import {SaveMovie} from "@/features/SaveMovie/SaveMovie";
import {SaveHistory} from "@/features/SaveHistory/SaveHistory";
import {FilmPoster} from "@/entities/FilmPoster/FilmPoster";
import {getAllMovies} from "@/Models/api/service";
import {IActorCard} from "@/entities/ActorCard/ActorCard.interface";
import {ActorCard} from "@/entities/ActorCard/ActorCard";
import {RowCards} from "@/shared/RowCards/RowCards";

async function getData(index: string) {
    const response = await fetch(direction + '/movies/' + index, {
        next: {
            revalidate: 120
        }
    })

    return response.json()
}

async function getActors(roles: IRole[]) {
    const indexes = roles.map(element => element.id)
    const actors = indexes.map((element) => "id=" + element).join("&")
    const response = await fetch(direction + '/actors?' + actors, {
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

export async function generateStaticParams() {
    const movies: IFilm[] = await getAllMovies()

    return movies.map((movie) => ({
        slug: movie.id
    }))
}

export default async function FilmPage(props: Props) {
    const film: IFilm = await getData(props.params.id)
    console.log(film.name)
    const actors: IActorCard[] = await getActors(film.actors)

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
            <RowCards header={"Cast"}>
                {(actors && film && film.actors.length > 0) && actors.map((element, index) => <ActorCard role={film.actors[index].role} id={element.id} photo={element.photo}
                                                                     name={element.name} surname={element.surname}
                                                                     born={element.born}/>)}
            </RowCards>
            <Comments movieId={props.params.id}/>
        </>
    )
}
