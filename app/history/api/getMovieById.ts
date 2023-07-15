import {element} from "prop-types";
import {direction, myDirection} from "@/Models/Models";

export async function getMovieById(_data: {key: string, movies: string[]}){
    const params = _data.movies.map((element) => "id="+element)
    const response = await fetch(myDirection + '/movies?' + params.join("&"))
    return response.json()
}