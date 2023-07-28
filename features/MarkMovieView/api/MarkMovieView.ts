import {myDirection} from "@/Models/Models";

export async function MarkMovieViewReq(id: string){
    const response = await fetch(myDirection + '/movies/' + id, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })

    return response.json()
}