import {openDb} from "@/app/api/database";
import {NextResponse} from "next/server";
import {IResponse} from "@/Models/Models";

export async function GET(req: Request, {params}: { params: { name: string, key: string } }) {
    const db = await openDb()
    const name = params.name
    const key = params.key

    if (name){
        const watchList = await db.get('SELECT * FROM watchLists WHERE [user] =  ? AND [key] = ?', name, key)
        if (!watchList) return NextResponse.json<IResponse>({additional: {text: "Watch List Not Founded!!", code: 400}})
        watchList.movies = JSON.parse(watchList.movies)
        return NextResponse.json<IResponse>({data: watchList, additional: {text: "Successful", code: 200}})
    }

    return NextResponse.json<IResponse>({additional: {text: "Something went wrong!", code: 300}})
}

export async function PUT(req: Request, {params}: { params: { name: string, key: string } }){
    const db = await openDb()

    if(params.name && params.key){
        const response = await db.run('UPDATE watchLists SET views = views + 1 WHERE key=? AND user=?', params.key, params.name)
        return NextResponse.json<IResponse>({additional: {text: "Successful", code: 200}})
    }

    return NextResponse.json<IResponse>({additional: {text: "you should choose watchlist", code: 400}})
}