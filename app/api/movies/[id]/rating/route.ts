import {openDb} from "@/app/api/database";
import {IResponse} from "@/Models/Models";
import {NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";


export async function GET(req: Request, {params}: { params: { id: string } }) {
    const db = await openDb()
    const {searchParams} = new URL(req.url)
    const id = params.id
    const user = searchParams.get('user')
    console.log({user, movieId: id})
    if (id) {
        const data = await db.get<{average: number | null, count: number}>('SELECT AVG(rating) as average, COUNT(rating) as count FROM ratings WHERE movie = ?', id)
        let isRated = false
        if (user){
            const userId = await db.get<{id: number}>('SELECT id FROM users WHERE name = ?', user)
            if (userId){
                const rated = await db.get<{rated: number}>('SELECT COUNT(id) as rated FROM ratings WHERE user = ? AND movie = ?', userId.id, id)
                if (rated) isRated = rated.rated != 0
            }
        }

        if (data) {
            if (data?.average == null) data.average = 0;
            return NextResponse.json<IResponse>({data: {...data, isRated}, additional: {text: "Successful", code: 200}})
        }

        return NextResponse.json<IResponse>({additional: {text: "Not founded movie", code: 400}}, {status: 400})
    }

    return NextResponse.json<IResponse>({additional: {text: "you should choose movie", code: 400}}, {status: 400})
}

export async function PUT(req: Request, {params}: { params: { id: string } }){
    const db = await openDb()
    const session = await getServerSession(authOptions)
    const {rate} = await req.json()

    if(session?.user?.name && params.id && rate){
        const userId = await db.get<{id: number}>('SELECT id FROM users WHERE name = ?', session.user.name)
        if (userId){
            const isRated = await db.get<{rated: number}>('SELECT COUNT(id) as rated FROM ratings WHERE user = ? AND movie = ?', userId.id, params.id)
            if (isRated?.rated == 0){
                const response = await db.run('INSERT INTO ratings (movie, user, rating) VALUES(?, ?, ?)', params.id, userId.id, rate)
                return NextResponse.json<IResponse>({additional: {text: "Successful", code: 200}})
            }
            return NextResponse.json<IResponse>({additional: {text: "you already rate this movie before", code: 400}})
        }
    }

    return NextResponse.json<IResponse>({additional: {text: "you not authorised", code: 400}})
}