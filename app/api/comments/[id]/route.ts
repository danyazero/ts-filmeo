import {crossHeaders, openDb} from "@/app/api/database";
import {NextResponse} from "next/server";
import {IFilm, IResponse} from "@/Models/Models";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";


export async function GET(req: Request, {params}: { params: { id: string } }) {
    const db = await openDb()
    const id = params.id
    if (id) {
        const data = await db.all('SELECT * FROM comments WHERE movie = ? ORDER BY id DESC', id)
        if (data) {
            return NextResponse.json<IResponse>({data, additional: {text: 'Successfully', code: 200}})
        }

        return NextResponse.json<IResponse>({additional: {text: "Not founded comments for this movie", code: 300}})
    }

    return NextResponse.json<IResponse>({additional: {text: "You should choose movie", code: 300}})
}

export async function POST(req: Request, {params}: { params: { id: string } }) {
    const db = await openDb()
    const id = params.id
    const data: { name: string, text: string } = await req.json()
    const session = await getServerSession(authOptions)
    console.log({id, data, session})

    if (id && session?.user) {
        await db.run('INSERT INTO comments(movie, name, text, likes, dislikes) VALUES (?, ?, ?, 0, 0)', id, session.user.name, data.text)


        return NextResponse.json<IResponse>({additional: {text: "Comment successfully added", code: 200}}, {
            status: 200, headers: crossHeaders
        })
    }

    return NextResponse.json<IResponse>({additional: {text: "There is no movie with that index.", code:300}}, {
        status: 300, headers: crossHeaders
    })
}