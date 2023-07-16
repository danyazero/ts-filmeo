import crypto from "crypto";
import {crossHeaders, openDb} from "@/app/api/database";
import {NextResponse} from "next/server";



export async function POST(req: Request) {
    const body = await req.json()
    console.log(body)
    const passwordHash = crypto.createHash('sha256').update(body.password).digest('hex')
    const db = await openDb()

    if (passwordHash != null && body.email){
        const res = await db.run('INSERT OR IGNORE INTO users (name, email, password) VALUES (?, ?, ?);', body.name, body.email, passwordHash)

        if (res.changes == 0) return NextResponse.json({text: "Looks like this account already exists."}, {
            status: 300, headers: crossHeaders
        })
        if (res.changes == 1) return NextResponse.json({text: "Registration completed successfully"}, {
            status: 200, headers: crossHeaders
        })
    }

    return NextResponse.json({text: "Not enough data"}, {
        status: 300, headers: crossHeaders
    })
}