import {element} from "prop-types";

export interface ISearchParams{
    q?: string,
    _page: string,
    genre_like?: string,
    rating_gte?: number,
    rating_lte?: number
}

export function searchEngine(_data: ISearchParams){
    if (_data.genre_like == 'all') delete _data.genre_like
    const params = Object.entries(_data).map((element, index) => element[0] + "=" + element[1])

    return params.length > 0 ? params.join("&") : ""
}