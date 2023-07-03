import {Category} from "@/shared/Category/Category";
import {getMovies, getNews} from "@/Models/api/service";
import {Recommended} from "@/entities/Recomended/Recommended";
import {HotCard} from "@/entities/HotCard/HotCard";
import {MoviesCards} from "@/entities/MoviesCards/MoviesCards";
import useSWR from "swr/immutable";
import {IFilm} from "@/Models/Models";
import {NewsCard} from "@/entities/NewsCard/NewsCard";
import {INewsCard} from "@/entities/NewsCard/NewsCard.interface";
import Link from "next/link";
import {FilmPoster} from "@/entities/FilmPoster/FilmPoster";

export default async function Home() {

    const films: IFilm[] = await getMovies({page: '1'})
    const news: INewsCard[] = await getNews(1)
    // const {data: films, isLoading} = useSWR({url: "movies", page: '1'}, getMovies)

    return (
        <>
            <div className={"flex flex-row gap-3 w-full py-4 lg:overflow-hidden overflow-x-scroll"}>
                <Category unicode={"1F37F"} title={"All"}/>
                <Category unicode={"1F601"} title={"Comedy"}/>
                <Category unicode={"1F984"} title={"Fantasy"}/>
                <Category unicode={"1F622"} title={"Drama"}/>
                <Category unicode={"1F4D7"} title={"History"}/>
                <Category unicode={"1F633"} title={"Horror"}/>
            </div>
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
            <MoviesCards header={"Special for you"} params={"_page=1"}/>
        </>
    )
}
