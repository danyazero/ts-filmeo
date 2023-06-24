import MovieCard from "@/entities/MovieCard/MovieCard";
import {IFilm} from "@/Models/Models";
import {Category} from "@/shared/Category/Category";
import {getMovies} from "@/Models/api/service";
import {Recommended} from "@/shared/Recomended/Recommended";
import {HotCard} from "@/entities/HotCard/HotCard";

export default async function Home() {

    const films: IFilm[] = await getMovies(1)

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

                </HotCard>
            </div>
            <h2 className={"text-white py-6 text-2xl font-medium"}>Special for you</h2>
            <div className={"flex flex-row flex-wrap gap-8 max-w-7xl"}>
                {
                    films.map((element, index) => <MovieCard saved={index % 2 == 0} key={"Movie_Card_"+index} id={element.id} name={element.name} year={element.year}
                                                             rating={element.rating} poster={element.poster}/>)
                }
            </div>
        </>
    )
}
