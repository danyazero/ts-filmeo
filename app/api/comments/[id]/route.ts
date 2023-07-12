import {openDb} from "@/app/api/database";
import {NextResponse} from "next/server";
import {IFilm} from "@/Models/Models";


export async function GET(req: Request, {params}: { params: { id: string } }) {
    const db = await openDb()
    const id = params.id
    if (id) {
        const data = await db.all('SELECT * FROM comments WHERE movie = ?', id)
        if (data) {
            return NextResponse.json(data)
        }

        return NextResponse.json({error: "Not founded comments for this movie"})
    }

    return NextResponse.json({error: "you should choose movie"})
}