import {myDirection} from "@/Models/Models";

export async function MarkWatchListViewReq(key: string, name: string){
    const response = await fetch(myDirection + '/watch/' + name + '/' + key, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })

    return await response.json()
}