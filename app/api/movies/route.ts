import {crossHeaders, openDb} from "@/app/api/database";
import {NextResponse} from "next/server";
import {IFilm, IResponse} from "@/Models/Models";
import {IActorCard} from "@/entities/ActorCard/ActorCard.interface";
import {IMovieCard} from "@/entities/MovieCard/MovieCard.interface";


async function getSearched(params: {
    ids?: string[] | null,
    genre?: string | null,
    search?: string | null,
    page?: string | null
}) {
    const db = await openDb()
    if ((params.search)) {
        const movies = await db.all<IMovieCard[]>('SELECT id, name, year, rating, cover, poster FROM movies WHERE name LIKE ?', `%${params.search}%`)
        const actors = await db.all<IActorCard[]>('SELECT * FROM actors WHERE name LIKE ?', `%${params.search}%`)
        return {movies, actors}
    }
    if ((params.genre) && (params.page)) {
        const movies = await db.all<IMovieCard[]>('SELECT id, name, year, rating, cover, poster FROM movies WHERE genre LIKE ? LIMIT ?, 9', `%${params.genre}%`, (parseInt(params.page) - 1) * 9)
        return {movies, actors: []}
    }
    if (params.page) {
        const movies = await db.all<IMovieCard[]>('SELECT id, name, year, rating, cover, poster FROM movies LIMIT ?, 9', (parseInt(params.page) - 1) * 9)

        return {movies, actors: []}
    }
    if (params.ids && params.ids.length > 0) {
        const data: any[] = []
        for (let i = 0; i < params.ids.length; i++) {
            data.push(await db.get<IMovieCard>('SELECT id, name, year, rating, cover, poster FROM movies WHERE [id] = ?', params.ids[i]))
        }
        return {movies: data, actors: []}
    }
    const allMovies = await db.all('SELECT * FROM movies')
    allMovies.forEach(element => element.actors = JSON.parse(element.actors))
    allMovies.forEach(element => element.genre = JSON.parse(element.genre))
    return {movies: allMovies}
}

export async function GET(req: Request) {
    const {searchParams} = new URL(req.url)
    const page = searchParams.get('_page')
    const genre = searchParams.get('genre_like')
    const search = searchParams.get('q')
    const ids = searchParams.getAll('id')

    const data = await getSearched({ids, genre, search, page})
    if (data) {
        return NextResponse.json<IResponse>({
            data,
            additional: {text: "Successful", code: 200}
        }, {headers: crossHeaders})
    }

    return NextResponse.json<IResponse>({additional: {text: "Movie not found", code: 400}}, {
        headers: crossHeaders,
        status: 400
    })
}