import {direction, IRole, myDirection} from "@/Models/Models";
import {z} from "zod";
import {ActorSchema} from "@/entities/ActorCard/ActorCard.interface";
import {AdditionalSchema} from "@/entities/MovieCard/MovieCard.interface";

export async function getMovieActors(roles: IRole[]) {
    const indexes = roles.map(element => element.id)
    const actors = indexes.map((element) => "id=" + element).join("&")

    const responseSchema = z.object({
        data: z.array(ActorSchema),
        additional: AdditionalSchema
    })

    const ref = myDirection + '/actors?' + actors

    const response = await fetch(ref, {
        next: {
            revalidate: 120
        }
    })

    const data = await responseSchema.parseAsync(await response.json())

    return data.data
}