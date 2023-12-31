import {openDb} from "@/app/api/database";
import {NextResponse} from "next/server";
import {IResponse} from "@/Models/Models";

export async function GET(req: Request, {params}: { params: { name: string } }) {
    const db = await openDb()
    const name = params.name

    if (name){
        const user = await db.get('SELECT id, name, email, image FROM users WHERE name = ?', name)
        if (!user) return NextResponse.json<IResponse>({additional: {text: "User Not Founded!!", code: 400}})
        return NextResponse.json<IResponse>({data: user, additional: {text: "Successful", code: 200}})
    }

    return NextResponse.json<IResponse>({additional: {text: "Something went wrong!", code: 300}})
}