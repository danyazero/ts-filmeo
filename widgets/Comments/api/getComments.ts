import {direction} from "@/Models/Models";

export async function getComments(movieId: string){
    const response = await fetch(direction + '/comments?movie='+ movieId, {
        next: {
            revalidate: 120
        }
    })

    return response.json()
}