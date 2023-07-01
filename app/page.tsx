import {Category} from "@/shared/Category/Category";
import {getMovies, getNews} from "@/Models/api/service";
import {Recommended} from "@/shared/Recomended/Recommended";
import {HotCard} from "@/entities/HotCard/HotCard";
import {MoviesCards} from "@/entities/MoviesCards/MoviesCards";
import useSWR from "swr/immutable";
import {IFilm} from "@/Models/Models";
import {NewsCard} from "@/entities/NewsCard/NewsCard";
import {INewsCard} from "@/entities/NewsCard/NewsCard.interface";

export default async function Home() {

    const films: IFilm[] = await getMovies({page: '1'})
    const news: INewsCard[] = await getNews(1)
    // const {data: films, isLoading} = useSWR({url: "movies", page: '1'}, getMovies)

    return (
        <>
            <div className={"flex flex-row gap-3 py-4"}>
                <Category unicode={"1F37F"} title={"All"}/>
                <Category unicode={"1F601"} title={"Comedy"}/>
                <Category unicode={"1F984"} title={"Fantasy"}/>
                <Category unicode={"1F622"} title={"Drama"}/>
                <Category unicode={"1F4D7"} title={"History"}/>
                <Category unicode={"1F633"} title={"Horror"}/>
            </div>
            <div className={"pb-3 flex flex-row gap-3"}>
                <Recommended id={films[1].id} rating={films[1].rating} name={films[1].name} poster={films[1].poster} caption={films[1].caption} year={films[1].year} genre={films[1].genre} runtime={films[1].runtime}/>
                <HotCard>
                {news ? <NewsCard name={news[0].name} preview={news[0].preview} date={news[0].date} text={news[0].text}/> : <p>Loading...</p>}
                </HotCard>
            </div>
            <MoviesCards header={"Special for you"} params={"_page=1"}/>
        </>
    )
}
