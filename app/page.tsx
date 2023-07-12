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

export default async function Home() {

    const films: IFilm[] = await getMovies({page: '1'})

    return (
        <>
            <Genres/>
            <div className={"pb-3 lg:h-96 lg:max-h-96 max-h-56 h-56"}>
                <FilmPoster large={true} id={7} name={films[7].name} poster={films[7].poster} cover={films[7].cover}>
                    <Recommended id={films[7].id} rating={films[7].rating} name={films[7].name}
                                 caption={films[7].caption} year={films[7].year}
                                 genre={films[7].genre} runtime={films[7].runtime}/>
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
