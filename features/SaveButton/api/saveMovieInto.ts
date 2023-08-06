import {myDirectionApi} from "@/Models/Models";

export async function saveMovieInto(name: string, key: string, index: number){
    const response = await fetch(myDirectionApi + '/watch/' + name + '/' + key, {
        method: 'POST',
        body: JSON.stringify({
            index
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })

    return response.json()
}