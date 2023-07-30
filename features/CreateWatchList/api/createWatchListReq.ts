import {myDirection} from "@/Models/Models";

export async function createWatchListReq(index: number, name: string, user: string){
    const response = await fetch(myDirection + '/watch/' + user, {
        method: 'POST',
        body: JSON.stringify({
            index,
            name
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })

    return response.json();
}