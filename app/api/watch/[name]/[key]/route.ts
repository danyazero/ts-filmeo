import {crossHeaders, openDb} from "@/app/api/database";
import {NextResponse} from "next/server";
import {IResponse} from "@/Models/Models";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {keyGenerator} from "@/Models/utils/keyGenerator";
import {IWatchList} from "@/app/[name]/model/User.interface";

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

export async function POST(req: Request, {params}: { params: { name: string, key: string } }) {
    const db = await openDb()
    const data: { index: number } = await req.json()
    const session = await getServerSession(authOptions)
    console.log({name: params.name, key: params.key, index: data.index})

    if (session?.user && session.user.name == params.name) {
        const response = await db.get<IWatchList>('SELECT * FROM watchLists WHERE [user] =  ? AND [key] = ?', params.name, params.key)
        if (!response) return NextResponse.json<IResponse>({additional: {text: "There is no such watchlist.", code: 500}}, {status: 500})

        const array: number[] = JSON.parse(response.movies)
        array.push(data.index)

        await db.run('UPDATE watchLists SET movies = ? WHERE user = ? AND key = ?', JSON.stringify(array), params.name, params.key)


        return NextResponse.json<IResponse>({additional: {text: "Success!", code: 200}}, {
            status: 200, headers: crossHeaders
        })
    }

    return NextResponse.json<IResponse>({additional: {text: "There is no user with that name.", code: 500}}, {
        status: 500
    })
}