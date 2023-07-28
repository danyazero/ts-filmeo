import {crossHeaders, openDb} from "@/app/api/database";
import {NextResponse} from "next/server";
import {IFilm, IResponse} from "@/Models/Models";
import {element} from "prop-types";

async function getSearched(ids?: string[]) {
    const db = await openDb()

    if (ids) {
        const data: any[] = []
        for (let i = 0; i < ids.length; i++) {
            data.push(await db.get('SELECT * FROM actors WHERE [id] = ?', ids[i]))
        }
        return data
    }

    return await db.all('SELECT * FROM movies')
}

export async function GET(req: Request) {
    const {searchParams} = new URL(req.url)
    const ids = searchParams.getAll('id')

    const data = await getSearched(ids)
    if (data) {
        return NextResponse.json<IResponse>({data, additional: {text: "Successful", code: 200}}, {headers: crossHeaders})
    }
    return NextResponse.json<IResponse>({additional: {text: "Actor not found", code: 400}}, {headers: crossHeaders, status: 400})
}