import {Category} from "@/shared/Category/Category";
import {getMovies, getNews} from "@/Models/api/service";
import {Recommended} from "@/entities/Recomended/Recommended";
import {HotCard} from "@/entities/HotCard/HotCard";
import {MoviesGrid} from "@/widgets/MoviesGrid/MoviesGrid";
import useSWR from "swr/immutable";
import {IFilm} from "@/Models/Models";
import {NewsCard} from "@/entities/NewsCard/NewsCard";
import {INewsCard} from "@/entities/NewsCard/NewsCard.interface";
import Link from "next/link";
import {FilmPoster} from "@/entities/FilmPoster/FilmPoster";
import {MoviesRow} from "@/widgets/MoviesRow/MoviesRow";
import {searchEngine} from "@/features/Search/utils/searchEngine";
import {Genres} from "@/widgets/Genres/Genres";
import {SWRConfig} from "swr";
import {RowCards} from "@/shared/RowCards/RowCards";
import {RenderHistory} from "@/features/RenderHistory/RenderHistory";

export default async function Home() {

    const films: IFilm[] = await getMovies({page: '1'})
    const news: INewsCard[] = await getNews(1)
    // const {data: films, isLoading} = useSWR({url: "movies", page: '1'}, getMovies)

    return (
        <>
            <Genres/>
            <div className={"pb-3 lg:h-96 h-fit lg:flex lg:flex-row flex-col gap-3 hidden"}>

                <FilmPoster large={true} id={7} name={films[7].name} poster={films[7].poster} cover={films[7].cover}>
                    <Recommended id={films[7].id} rating={films[7].rating} name={films[7].name}
                                 caption={films[7].caption} year={films[7].year}
                                 genre={films[7].genre} runtime={films[7].runtime}/>
                </FilmPoster>
                <HotCard>
                    {news ? <NewsCard name={news[0].name} preview={news[0].preview} date={news[0].date}
                                      text={news[0].text}/> : <p>Loading...</p>}
                </HotCard>
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
