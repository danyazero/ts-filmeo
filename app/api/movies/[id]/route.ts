import {openDb} from "@/app/api/database";
import {NextResponse} from "next/server";
import {IFilm} from "@/Models/Models";


export async function GET(req: Request, {params}: { params: { id: string } }) {
    const db = await openDb()
    const id = params.id
    if (id) {
        const data = await db.get('SELECT * FROM movies WHERE [id] = ?', id)
        if (data) {
            data.actors = JSON.parse(data.actors)
            data.genre = JSON.parse(data.genre)
            return NextResponse.json(data)
        }

        return NextResponse.json({error: "Not founded movie"}, {status: 400})
    }

    return NextResponse.json({error: "you should choose movie"}, {status: 401})
}