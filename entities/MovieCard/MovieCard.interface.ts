export interface IMovieCard {
    id: number,
    name: string,
    year: number,
    poster: string,
    cover: string,
    rating: number,
    saved?: boolean
}