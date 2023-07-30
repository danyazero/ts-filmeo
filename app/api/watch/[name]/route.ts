import {crossHeaders, openDb} from "@/app/api/database";
import {NextResponse} from "next/server";
import {IResponse} from "@/Models/Models";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {keyGenerator} from "@/Models/utils/keyGenerator";

export async function GET(req: Request, {params}: { params: { name: string } }) {
    const db = await openDb()
    const name = params.name

    if (name){
        const watchLists = await db.all('SELECT * FROM watchLists WHERE [user] =  ? LIMIT 10', name)
        watchLists.forEach(element => element.movies = JSON.parse(element.movies))
        return NextResponse.json<IResponse>({data: watchLists, additional: {text: "Successful", code: 200}})
    }

    return NextResponse.json<IResponse>({additional: {text: "Something went wrong!", code: 300}})
}

export async function POST(req: Request, {params}: { params: { name: string } }) {
    const db = await openDb()
    const data: { index: number, name: string } = await req.json()
    const session = await getServerSession(authOptions)
    const key = keyGenerator()
    console.log({data, session})

    if (session?.user && session.user.name == params.name) {
        await db.run('INSERT INTO watchLists(key, user, name, movies) VALUES (?, ?, ?, ?)', key, session.user.name, data.name, JSON.stringify([data.index]))


        return NextResponse.json<IResponse>({additional: {text: "Success!", code: 200}}, {
            status: 200, headers: crossHeaders
        })
    }

    return NextResponse.json<IResponse>({additional: {text: "There is no user with that name.", code: 500}}, {
        status: 500
    })
}