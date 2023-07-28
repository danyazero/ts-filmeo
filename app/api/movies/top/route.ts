import {openDb} from "@/app/api/database";
import {NextResponse} from "next/server";
import {IFilm, IResponse} from "@/Models/Models";


export async function GET(req: Request) {
    const db = await openDb()
    const data = await db.get('SELECT * FROM movies ORDER BY views DESC LIMIT 1')
    if (data) {
        data.actors = JSON.parse(data.actors)
        data.genre = JSON.parse(data.genre)
        return NextResponse.json<IResponse>({data, additional: {text: "Successful", code: 200}})
    }

    return NextResponse.json<IResponse>({additional: {text: "not founded", code: 400}}, {status: 400})
}