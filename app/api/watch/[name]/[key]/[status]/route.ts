import {crossHeaders, openDb} from "@/app/api/database";
import {NextResponse} from "next/server";
import {IResponse} from "@/Models/Models";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {keyGenerator} from "@/Models/utils/keyGenerator";
import {IWatchList} from "@/app/[name]/model/User.interface";

export async function PUT(req: Request, {params}: { params: { name: string, key: string, status: string} }){
    const db = await openDb()
    const session = await getServerSession(authOptions)

    if(params.name && params.key && params.name == session?.user?.name){
        const response = await db.run('UPDATE watchLists SET public = ? WHERE user = ? AND key = ?', params.status, params.key, params.name)
        return NextResponse.json<IResponse>({additional: {text: "Successful", code: 200}})
    }

    return NextResponse.json<IResponse>({additional: {text: "you should choose watchlist", code: 400}})
}
