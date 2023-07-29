import crypto from "crypto";
import {myDirection} from "@/Models/Models";
import {getHash} from "@/Models/utils/getHash";

export     async function registerUser(name: string, email: string, password: string){
    const passwordHash = getHash(password)
    const response = await fetch(myDirection + '/auth/register', {
        method: 'POST',
        body: JSON.stringify({
            name,
            email,
            password: passwordHash
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })

    return response.json()
}