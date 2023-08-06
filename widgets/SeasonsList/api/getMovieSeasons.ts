import {myDirectionApi} from "@/Models/Models";
import {z} from "zod";
import {AdditionalSchema} from "@/entities/MovieCard/MovieCard.interface";
import {EpisodeSchema} from "@/widgets/SeasonsList/model/SeasonList.interface";

export async function getMovieSeasons(id: string){
    const responseSchema = z.object({
        data: z.array(EpisodeSchema).optional(),
        additional: AdditionalSchema
    })
    const response = await fetch(myDirectionApi + '/movies/' + id + '/seasons', {next: {revalidate: 120}})

    return await responseSchema.parseAsync(await response.json())
}