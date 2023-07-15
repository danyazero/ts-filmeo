import {crossHeaders, openDb} from "@/app/api/database";
import {NextResponse} from "next/server";
import {IFilm} from "@/Models/Models";
import {element} from "prop-types";


async function getSearched(params: {
    ids?: string[],
    genre?: string | null,
    search?: string | null,
    page?: string | null
}) {
    const db = await openDb()
    if ((params.search)) return await db.all('SELECT * FROM movies WHERE name LIKE ?', `%${params.search}%`)
    if ((params.genre) && (params.page)) return await db.all('SELECT * FROM movies WHERE genre LIKE ? LIMIT ?, 9', `%${params.genre}%`, (parseInt(params.page) - 1) * 9)
    if (params.page) return await db.all('SELECT * FROM movies LIMIT ?, 9', (parseInt(params.page) - 1) * 9)

    if (params.ids) {
        const data: any[] = []
        for (let i = 0; i < params.ids.length; i++) {
            data.push(await db.get('SELECT * FROM movies WHERE [id] = ?', params.ids[i]))
        }
        return data
    }

    return await db.all('SELECT * FROM movies')
}

export async function GET(req: Request) {
    const {searchParams} = new URL(req.url)
    const page = searchParams.get('_page')
    const genre = searchParams.get('genre_like')
    const search = searchParams.get('q')
    const ids = searchParams.getAll('id')

    const data = await getSearched({ids, genre, search, page})
    if (data) {
        data.forEach(element => element.actors = JSON.parse(element.actors))
        data.forEach(element => element.genre = JSON.parse(element.genre))
        return NextResponse.json(data, {headers: crossHeaders})
    }

    return NextResponse.json({error: "Not founded movies"}, {headers: crossHeaders, status: 400})
}