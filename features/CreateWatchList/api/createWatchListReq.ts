import {myDirection} from "@/Models/Models";

export async function createWatchListReq(name: string, user: string){
    const response = await fetch(myDirection + '/users/' + user, {
        method: 'POST',
        body: JSON.stringify({
            name
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })

    return response.json();
}