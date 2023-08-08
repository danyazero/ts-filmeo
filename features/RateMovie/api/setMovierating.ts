import {myDirectionApi} from "@/Models/Models";

export async function setMovieRating(movie: number, rate: number){
    const response = await fetch(myDirectionApi + '/movies/' + movie + '/rating', {
        method: 'PUT',
        body: JSON.stringify({
            rate
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    return response.json()
}