import {direction} from "@/Models/Models";

export async function addComment(movieId: number, username: string, text: string){
    const response = await fetch(direction + '/comments', {
        method: 'POST',
        body: JSON.stringify({
            movie: movieId,
            username: username,
            text: text,
            likes: 0,
            dislikes: 0
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
}