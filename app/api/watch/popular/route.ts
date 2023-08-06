import {openDb} from "@/app/api/database";
import {NextResponse} from "next/server";
import {IResponse} from "@/Models/Models";

export async function GET(req: Request) {
    const db = await openDb()
    const watchLists = await db.all('SELECT * FROM watchLists WHERE public = ? ORDER BY views DESC LIMIT 3', "true")
    if (!watchLists) return NextResponse.json<IResponse>({additional: {text: "Watch List Not Founded!!", code: 400}})
    watchLists.forEach(element => element.movies = JSON.parse(element.movies))

    return NextResponse.json<IResponse>({data: watchLists, additional: {text: "Successful", code: 200}})
}