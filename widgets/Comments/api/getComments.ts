export async function getComments(_data: {key: string, movieId: number}){
    const response = await fetch('http://192.168.0.229:3303/comments?movie='+ _data.movieId)

    return response.json()
}