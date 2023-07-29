import crypto from "crypto";

export function getHash(value: string){
    return crypto.createHash('sha256').update(value).digest('hex')
}