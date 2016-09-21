import * as React from 'react';
import movieEntity from '../../api/MovieEntity';

interface Props extends React.Props<MovieRow> {
    movie: movieEntity;
}

export default class MovieRow extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <tr>
                <td>
                    <img src={this.props.movie.movie_url} className="avatar"/>
                </td>
                <td>
                    <h4 itemprop="name">
                        <a title="{movie.name}" href={'/movie/' + this.props.movie.id}> {this.props.movie.name} </a><span></span></h4>
                    <p class="cert-runtime-genre">
                        <span className="label label-primary">Mystery</span>
                        <span>&nbsp; |&nbsp; </span>
                        <span className="label label-success">Thriller</span>
                        <div className="media-heading" itemprop="description">
                            {this.props.movie.description}</div>
                    </p>
                </td>
            </tr >
        );
    }
}