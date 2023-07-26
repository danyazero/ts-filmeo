import React from "react";
import {direction, IFilm, IRole} from "@/Models/Models";
import {BackButton} from "@/shared/BackButton";
import {Comments} from "@/widgets/Comments";
import {SaveHistory} from "@/features/SaveHistory";
import {getAllMovies} from "@/Models/api/service";
import {getMovieData} from "@/app/film/[id]/api/getMovieData";
import {MovieHeader} from "@/widgets/MovieHeader";
import {MovieView} from "@/widgets/MovieView";
import {MovieActors} from "@/widgets/MovieActors/ui/MovieActors";
import {MarkView} from "@/features/MarkView";

type Props = {
    params: {
        id: string
    }
}

export async function generateMetadata({params: {id}}: Props) {
    const film: IFilm = await getMovieData(id)

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
    let film: IFilm = await getMovieData(props.params.id);

    return (
        <>
            <BackButton/>
            <SaveHistory movieId={props.params.id}/>
            <MarkView id={props.params.id}/>
            <MovieHeader id={film.id} name={film.name} poster={film.poster} cover={film.cover}/>
            <MovieView {...film}/>
            <MovieActors roles={film.actors}/>



            <Comments movieId={props.params.id}/>
        </>
    )
}
