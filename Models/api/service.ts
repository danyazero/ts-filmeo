import {direction, IFilm, myDirection} from "@/Models/Models";

export async function getMovies(data: { url?: string, page: string }) {

    const response = await fetch(myDirection + `/movies?&_page=${data.page}`, {
        next: {
            revalidate: 120
        }
    })

    return response.json()
}

export async function getAllMovies() {

    const response = await fetch(direction + `/movies`, {
        next: {
            revalidate: 120
        }
    })

    return response.json()
}

export async function getNews(id: number) {
    console.log(id + " news")
    const response = await fetch(direction + '/news?id=' + id, {
        next: {
            revalidate: 120
        }
    })

    return response.json()
}

export async function getSearchedMovies(params: string) {

    const response = await fetch(myDirection + `/movies?${params}`)

    return response.json()
}