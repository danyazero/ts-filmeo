import {openDb} from "@/app/api/database";
import {NextResponse} from "next/server";
import {IResponse} from "@/Models/Models";

export async function GET(req: Request, {params}: { params: { name: string } }) {
    const db = await openDb()
    const name = params.name

    if (name){
        const watchLists = await db.all('SELECT * FROM watchLists WHERE [user] =  ?', name)
        watchLists.forEach(element => element.movies = JSON.parse(element.movies))
        return NextResponse.json<IResponse>({data: watchLists, additional: {text: "Successful", code: 200}})
    }

    return NextResponse.json<IResponse>({additional: {text: "Something went wrong!", code: 300}})
}