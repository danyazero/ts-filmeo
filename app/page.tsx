import Image from 'next/image'
import MovieCard from "@/shared/MovieCard/MovieCard";
import {IFilm} from "@/Models/Models";
import {element} from "prop-types";

async function getData(){
    const response = await fetch('https://my-json-server.typicode.com/danyazero/films-json/movies', {
        next: {
            revalidate: 120
        }
    })

    return response.json()
}

export default async function Home() {

    const films: IFilm[] = await getData()

    return (
        <>
            <p>Home page</p>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap", gap: "45px"}}>
                {
                    films.map((element, index) => <MovieCard id={element.id} name={element.name} year={element.year} rating={element.rating} poster={element.poster}/>)
                }
            </div>
        </>
    )
}
