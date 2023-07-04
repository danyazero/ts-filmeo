import {direction, IFilm} from "@/Models/Models";

export async function getMovies(data: { url?: string, page: string }) {

    const response = await fetch(direction + `/movies?&_page=${data.page}&_limit=9`, {
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

export async function getSearchedMovies(params: string ) {

    const response = await fetch(direction + `/movies?${params}&_limit=9`)

    return response.json()
}