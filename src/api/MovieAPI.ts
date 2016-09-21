import MovieEntity from './MovieEntity';
import MoviesMockData from './MoviesMockData';


// Sync mock data API, inspired from:
// https://gist.github.com/coryhouse/fd6232f95f9d601158e4
class MovieAPI {
    //This would be performed on the server in a real app. Just stubbing in.
    private _clone(item) {
        return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
    };

    // Just return a copy of the mock data
    getAllMovies(): Array<MovieEntity> {
        return this._clone(MoviesMockData);
    }
}

export default new MovieAPI();

