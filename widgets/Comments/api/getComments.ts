import {direction, myDirection} from "@/Models/Models";

export async function getComments(movieId: string){
    const response = await fetch(myDirection + '/comments/'+ movieId, {
        next: {
            revalidate: 120
        }
    })

    return response.json()
}