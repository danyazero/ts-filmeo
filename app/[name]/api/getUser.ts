import {myDirectionApi} from "@/Models/Models";
import {z} from "zod";
import {AdditionalSchema} from "@/entities/MovieCard/MovieCard.interface";
import {UserSchema, WatchListSchema} from "@/app/[name]/model/User.interface";

export async function getUser(name: string) {
    const responseSchema = z.object({
        data: UserSchema.optional(),
        additional: AdditionalSchema
    })
    const response = await fetch(myDirectionApi + '/users/' + name, {next: {revalidate: 120}})

    return await responseSchema.parseAsync(await response.json())
}