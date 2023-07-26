import {openDb} from "@/app/api/database";
import {NextResponse} from "next/server";
import {IFilm, IResponse} from "@/Models/Models";


export async function GET(req: Request, {params}: { params: { id: string } }) {
    const db = await openDb()
    const id = params.id
    if (id) {
        const data = await db.get('SELECT * FROM movies WHERE [id] = ?', id)
        if (data) {
            data.actors = JSON.parse(data.actors)
            data.genre = JSON.parse(data.genre)
            return NextResponse.json<IResponse>({data, additional: {text: "Successful", code: 200}})
        }

        return NextResponse.json<IResponse>({additional: {text: "Not founded movie", code: 400}}, {status: 400})
    }

    return NextResponse.json<IResponse>({additional: {text: "you should choose movie", code: 400}}, {status: 400})
}

export async function PUT(req: Request, {params}: { params: { id: string } }){
    const db = await openDb()

    if(params.id){
        const response = await db.run('UPDATE movies SET views = views + 1 WHERE id=?', params.id)
        return NextResponse.json<IResponse>({additional: {text: "Successful", code: 200}})
    }

    return NextResponse.json<IResponse>({additional: {text: "you should choose movie", code: 400}})
}