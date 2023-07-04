import {element} from "prop-types";
import {direction} from "@/Models/Models";

export async function getMovieById(_data: {key: string, movies: string[]}){
    const params = _data.movies.map((element) => "id="+element)
    const response = await fetch(direction + '/movies?' + params.join("&"))
    return response.json()
}