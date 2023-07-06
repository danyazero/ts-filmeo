import {direction} from "@/Models/Models";

export const getSearchedMovies = async (_data: {key: string, params: string})=> {
    const response = await fetch(direction + `/movies?${_data.params}&_limit=9`)

    return response.json()
}