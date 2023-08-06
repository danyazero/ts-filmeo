import {myDirectionApi} from "@/Models/Models";

export async function MarkWatchListViewReq(key: string, name: string){
    const response = await fetch(myDirectionApi + '/watch/' + name + '/' + key, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })

    return await response.json()
}