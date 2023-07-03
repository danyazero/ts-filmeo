import {element} from "prop-types";

export async function getMovieById(_data: {key: string, movies: string[]}){
    const params = _data.movies.map((element) => "id="+element)
    const response = await fetch('http://192.168.0.229:3303/movies?' + params.join("&"))
    return response.json()
}