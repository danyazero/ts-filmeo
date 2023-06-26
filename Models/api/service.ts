export async function getMovies(data: {url?: string, page: string}) {

    const response = await fetch(`http://localhost:3303/movies?&_page=${data.page}&_limit=9`, {
        next: {
            revalidate: 120
        }
    })

    return response.json()
}

export async function getSearchedMovies(q: string, page: string) {

    const response = await fetch(`http://localhost:3303/movies?q=${q}&_page=${page}&_limit=9`)

    return response.json()
}