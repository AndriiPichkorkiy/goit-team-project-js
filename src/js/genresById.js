import { movieService } from "./movie-service";

export default function sayGenres(genre_ids){
    //Максимальна довжина рядка. Рекомендовано від 22 до 25
    const maxLength = 24;
    const other = "Other";

    let end = false;
    let genreNames ="";
    genre_ids.forEach(id => {
        const genre = movieService.genres.find(obj => {if(obj.id === id){return obj.name};});
        if (end) {return};
        if(!genreNames){genreNames += genre.name;}
        else{
            if(genreNames.length + genre.name.length >= maxLength - (other.length + 2)){
                genreNames += ", " + other; 
                end = true; 
                return;}
            genreNames += ", " + genre.name;
        };
    });
    return genreNames;
};