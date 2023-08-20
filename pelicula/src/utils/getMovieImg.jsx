import placeholder from "../img/placeholder.png"

export function getMovieImg(path, width) {

    return path ? `https://image.tmdb.org/t/p/w500${width}${path}` : placeholder
}
// const imageUrl = posterPath
// ? `https://image.tmdb.org/t/p/w500${posterPath}`
// : "URL_DE_IMAGEN_POR_DEFECTO";
