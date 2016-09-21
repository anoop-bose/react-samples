/// <reference path="../../../typings/index.d.ts" />
import * as React from 'react';
import * as ReactRouter from 'react-router';
import movieAPI from '../../api/MovieAPI';
import movieEntity from '../../api/MovieEntity';
import MovieRow from './MovieRow';

interface Props extends React.Props<MovieList> {
}

// We define Movies as a state (the compoment holding this will be a container
// component)
interface State {
    movies: Array<movieEntity>
}

export default class MovieList extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        // set initial state
        this.state = { movies: [] };
    }
  
    // Standard react lifecycle function:
    // https://facebook.github.io/react/docs/component-specs.html
    public componentWillMount() {
        this.state.movies = movieAPI.getAllMovies();
    }

    private routerWillLeave() {
        return 'false';
    }

    render() {

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Now Running</h3>
                </div>
                <div class="panel-body">
                    <table className="table">
                        <tbody>
                            {
                                this.state.movies.map((movie: movieEntity) =>
                                    <MovieRow key={movie.id} movie = {movie}/>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
