export interface IFilm{
    id: number,
    name: string,
    year: number,
    rating: number,
    country: string,
    genre: string[],
    runtime: number,
    trailer: string,
    caption: string,
    poster: string
}