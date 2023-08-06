import {direction, myDirectionApi} from "@/Models/Models";

export async function addComment(movieId: number, name: string, text: string){
    const response = await fetch(myDirectionApi + '/comments/' + movieId.toString(), {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            text: text
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })

    return response.json()
}