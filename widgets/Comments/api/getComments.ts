export async function getComments(_data: {key: string, movieId: number}){
    const response = await fetch('http://localhost:3303/comments?movie='+ _data.movieId)

    return response.json()
}