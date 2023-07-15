import {direction, myDirection} from "@/Models/Models";

export const getSearchedMovies = async (_data: {key: string, params: string})=> {
    const response = await fetch(myDirection + `/movies?${_data.params}&_limit=9`)

    return response.json()
}