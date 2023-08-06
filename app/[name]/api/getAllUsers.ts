import {z} from "zod";
import {UserSchema} from "@/app/[name]/model/User.interface";
import {AdditionalSchema} from "@/entities/MovieCard/MovieCard.interface";
import {myDirectionApi} from "@/Models/Models";

export async function getAllUsers() {
    const responseSchema = z.object({
        data: z.array(UserSchema),
        additional: AdditionalSchema
    })
    const response = await fetch(myDirectionApi + '/users', {next: {revalidate: 120}})

    const data = await responseSchema.parseAsync(await response.json())

    return data.data
}