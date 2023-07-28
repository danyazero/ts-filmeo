import {myDirection} from "@/Models/Models";
import {z} from "zod";
import {AdditionalSchema} from "@/entities/MovieCard/MovieCard.interface";
import {UserSchema, WatchListSchema} from "@/app/[name]/model/User.interface";

export async function getUser(name: string) {
    const responseSchema = z.object({
        data: z.object({user: UserSchema, watchLists: z.array(WatchListSchema).optional()}).optional(),
        additional: AdditionalSchema
    })
    const response = await fetch(myDirection + '/users/' + name, {next: {revalidate: 120}})

    return await responseSchema.parseAsync(await response.json())
}