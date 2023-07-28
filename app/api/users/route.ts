import {openDb} from "@/app/api/database";
import {NextResponse} from "next/server";
import {IResponse} from "@/Models/Models";

export async function GET(req: Request) {
    const db = await openDb()
    const user = await db.all('SELECT id, name, email, image FROM users')
    if (!user) return NextResponse.json<IResponse>({additional: {text: "User Not Founded!!", code: 400}})

    return NextResponse.json<IResponse>({data: user, additional: {text: "Successful", code: 200}})
}