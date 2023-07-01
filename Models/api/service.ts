import {IFilm} from "@/Models/Models";

export async function getMovies(data: { url?: string, page: string }) {

    const response = await fetch(`http://localhost:3303/movies?&_page=${data.page}&_limit=9`, {
        next: {
            revalidate: 120
        }
    })

    return response.json()
}

export async function getNews(id: number) {
    console.log(id + " news")
    const response = await fetch('http://localhost:3303/news?id=' + id, {
        next: {
            revalidate: 120
        }
    })

    return response.json()
}

export async function getSearchedMovies(_data: { url: string, params: string }) {

    const response = await fetch(`http://localhost:3303/movies?${_data.params}&_limit=9`)

    return response.json()
}