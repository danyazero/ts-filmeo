import crypto from "crypto";
import {crossHeaders, openDb} from "@/app/api/database";
import {NextResponse} from "next/server";
import {IResponse} from "@/Models/Models";
import {getHash} from "@/Models/utils/getHash";



export async function POST(req: Request) {
    const body = await req.json()
    console.log(body)
    const passwordHash = getHash(body.password)
    const db = await openDb()

    if (passwordHash != null && body.email){
        const res = await db.run('INSERT OR IGNORE INTO users (name, email, password) VALUES (?, ?, ?);', body.name, body.email, passwordHash)

        if (res.changes == 0) return NextResponse.json<IResponse>({additional: {text: "Looks like this account already exists.", code: 300}}, {
            status: 300, headers: crossHeaders
        })
        if (res.changes == 1) return NextResponse.json<IResponse>({additional: {text: "Registration completed successfully", code: 200}}, {
            status: 200, headers: crossHeaders
        })
    }

    return NextResponse.json<IResponse>({additional: {text: "Not enough data", code: 300}}, {
        status: 300, headers: crossHeaders
    })
}