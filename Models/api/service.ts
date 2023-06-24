export async function getMovies(page: number) {
    const response = await fetch(`https://my-json-server.typicode.com/danyazero/films-json/movies?&_page=${page}&_limit=12`, {
        next: {
            revalidate: 120
        }
    })

    return response.json()
}