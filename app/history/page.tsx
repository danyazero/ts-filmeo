'use client'
import React, {FC, useEffect, useState} from 'react';
import useSWR from "swr";
import {getMovieById} from "@/app/history/api/getMovieById";
import MovieCard from "@/entities/MovieCard/MovieCard";
import {IMovieCard} from "@/entities/MovieCard/MovieCard.interface";
import st from ".//History.module.scss"
import {useRouter} from "next/navigation";

const Page: FC = () => {
    const [history, setHistory] = useState<string[]>([])
    const router = useRouter()
    useEffect(() => {
        console.log(localStorage.getItem("history"))
        if (localStorage.getItem("history")) setHistory(JSON.parse(localStorage.getItem("history")))
    }, [])

    const {data, isLoading} = useSWR<IMovieCard[]>({key: 'history', movies: history}, getMovieById)

    function sortAndMapMovies(_data: IMovieCard[]){
        return _data.sort((a, b) => {
            const indexA = history.indexOf(String(a.id));
            const indexB = history.indexOf(String(b.id));
            return indexA - indexB;
        });
    }

    return (
        <div className={st.historyPage}>
            <div className={st.header}>
                <h2>History</h2>
                <p onClick={() => {
                    localStorage.clear()
                    router.push('/')
                }}>clear</p>
            </div>
            <div className={st.moviesHistory}>
                {history.length > 0 ? (!isLoading && data ? sortAndMapMovies(data).reverse().map((element, index) => <MovieCard cover={element.cover} key={"history_movie_" + index}
                                                                                        id={element.id}
                                                                                        name={element.name}
                                                                                        year={element.year}
                                                                                        poster={element.poster}
                                                                                        rating={element.rating}/>) :
                    <p>Loading...</p>) : <p>Empty :(</p>}
            </div>
        </div>
    );
}

export default Page;