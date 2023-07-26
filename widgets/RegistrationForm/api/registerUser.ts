import crypto from "crypto";
import {myDirection} from "@/Models/Models";

export     async function registerUser(name: string, email: string, password: string){
    const passwordHash = crypto.createHash('sha256').update(password).digest('hex')
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