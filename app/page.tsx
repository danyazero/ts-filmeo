import {getMovies, getNews} from "@/Models/api/service";
import {Recommended} from "@/entities/Recomended/Recommended";
import {MoviesGrid} from "@/widgets/MoviesGrid/MoviesGrid";
import {IFilm} from "@/Models/Models";
import {FilmPoster} from "@/entities/FilmPoster/FilmPoster";
import {MoviesRow} from "@/widgets/MoviesRow/MoviesRow";
import {searchEngine} from "@/features/Search/utils/searchEngine";
import {Genres} from "@/widgets/Genres/Genres";
import {RowCards} from "@/shared/RowCards/RowCards";
import {RenderHistory} from "@/features/RenderHistory/RenderHistory";
import {LoginButton} from "@/shared/LoginButton/LoginButton";
import {LogoutButton} from "@/shared/LogoutButton/LogoutButton";

export default async function Home() {

    const films: IFilm[] = await getMovies({page: '1'})

    return (
        <>
            <LoginButton/>
            <LogoutButton/>
            <Genres/>
            <div className={"pb-3 lg:h-96 lg:max-h-96 max-h-56 h-56"}>
                <FilmPoster large={true} id={films[6].id} name={films[6].name} poster={films[6].poster} cover={films[6].cover}>
                    <Recommended id={films[6].id} rating={films[6].rating} name={films[6].name}
                                 caption={films[6].caption} year={films[6].year}
                                 genre={films[6].genre} runtime={films[6].runtime}/>
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
