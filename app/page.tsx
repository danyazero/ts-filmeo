import {getMovies} from "@/Models/api/service";
import {Recommended} from "@/entities/Recomended";
import {MoviesGrid} from "@/widgets/MoviesGrid";
import {IAdditional, IFilm} from "@/Models/Models";
import {FilmPoster} from "@/entities/FilmPoster";
import {MoviesRow} from "@/widgets/MoviesRow";
import {searchEngine} from "@/features/Search/model/searchEngine";
import {Genres} from "@/widgets/Genres";
import {RowCards} from "@/shared/RowCards";
import {RenderHistory} from "@/features/RenderHistory";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export default async function Home() {

    const films: {data: IFilm[], additional: IAdditional} = await getMovies({page: '1'})
    const session = await getServerSession(authOptions);

    return (
        <>
            {session ? <h2>Hello, {session.user?.name}</h2> : <></>}
            <Genres/>
            <div className={"pb-3 lg:h-96 lg:max-h-96 max-h-56 h-56"}>
                <FilmPoster large={true} id={films.data[6].id} name={films.data[6].name} poster={films.data[6].poster} cover={films.data[6].cover}>
                    <Recommended id={films.data[6].id} rating={films.data[6].rating} name={films.data[6].name}
                                 caption={films.data[6].caption} year={films.data[6].year}
                                 genre={films.data[6].genre} runtime={films.data[6].runtime}/>
                </FilmPoster>
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
