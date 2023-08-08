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
import {MarkMovieView} from "../../../features/MarkMovieView";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {SeasonsList} from "@/widgets/SeasonsList/ui/SeasonsList";
import {RateMovie} from "@/features/RateMovie";

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
        id: movie.id.toString()
    }))
}

export default async function FilmPage(props: Props) {
    let film: IFilm = await getMovieData(props.params.id);
    const session = await getServerSession(authOptions)
    return (
        <>
            <BackButton/>
            <SaveHistory movieId={props.params.id}/>
            <MarkMovieView id={props.params.id}/>
            <MovieHeader id={film.id} name={film.name} poster={film.poster} cover={film.cover}/>
            <MovieView {...film}/>
            <MovieActors roles={film.actors}/>
            <SeasonsList id={props.params.id}/>



            <Comments movieId={props.params.id}/>
        </>
    )
}
