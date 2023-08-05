import {openDb} from "@/app/api/database";
import {NextResponse} from "next/server";
import {IResponse} from "@/Models/Models";
import {IEpisode} from "@/widgets/SeasonsList/model/SeasonList.interface";

export async function GET(req: Request, {params}: { params: { id: string } }) {
    const db = await openDb()
    const id = params.id
    if (id) {
        const data = await db.all<IEpisode[]>('SELECT * FROM seasons WHERE movie = ?', id)
        if (data && data.length > 0) {
            return NextResponse.json<IResponse>({data, additional: {text: "Successful", code: 200}})
        }

        return NextResponse.json<IResponse>({additional: {text: "Not founded seasons for this movie", code: 400}}, {status: 400})
    }

    return NextResponse.json<IResponse>({additional: {text: "you should choose movie", code: 400}}, {status: 400})
}