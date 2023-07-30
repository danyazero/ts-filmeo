import {Recommended} from "@/entities/Recomended";
import {MoviesGrid} from "@/widgets/MoviesGrid";
import {IFilm} from "@/Models/Models";
import {FilmPoster} from "@/entities/FilmPoster";
import {MoviesRow} from "@/widgets/MoviesRow";
import {searchEngine} from "@/features/Search/model/searchEngine";
import {Genres} from "@/widgets/Genres";
import {RowCards} from "@/shared/RowCards";
import {RenderHistory} from "@/features/RenderHistory";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {getPopularMovie} from "@/Models/api/getPopularMovie";
import {UserGreeting} from "@/entities/UserGreeting";
import React from "react";
import Link from "next/link";

export default async function Home() {

    const popularFilm: IFilm = await getPopularMovie()
    const session = await getServerSession(authOptions);

    return (
        <>
            {session?.user?.name ? <UserGreeting name={session.user.name}/> : <></>}
            <Genres/>
            <div className={"pb-3 lg:h-96 lg:max-h-96 max-h-56 h-56"}>
                <Link href={'/film/' + popularFilm.id}>
                    <FilmPoster large={true} id={popularFilm.id} name={popularFilm.name} poster={popularFilm.poster}
                                cover={popularFilm.cover}>
                        <Recommended id={popularFilm.id} rating={popularFilm.rating} name={popularFilm.name}
                                     caption={popularFilm.caption} year={popularFilm.year}
                                     genre={popularFilm.genre} runtime={popularFilm.runtime}/>
                    </FilmPoster>
                </Link>
            </div>
            <MoviesRow header={"Fantasy"} category={"fantasy"}
                       params={searchEngine({_page: '1', genre_like: "fantasy"})}/>
            <MoviesRow header={"Drama"} category={"drama"} params={searchEngine({_page: '1', genre_like: "drama"})}/>
            <RowCards link={'/history'} header={"History"}>
                <RenderHistory/>
            </RowCards>
            <MoviesGrid header={"Special for you"} params={"_page=1"}/>
        </>
    )
}
