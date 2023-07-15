import {direction, myDirection} from "@/Models/Models";

export async function addComment(movieId: number, username: string, text: string){
    const response = await fetch(myDirection + '/comments/' + movieId.toString(), {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            text: text
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
}