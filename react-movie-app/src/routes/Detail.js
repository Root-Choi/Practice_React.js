import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState();
    const { id } = useParams();
    const getDetail = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    };
    console.log(movie);
    useEffect(() => {
        getDetail();
    }, []);

    return (
        <div>
            {loading ? (
                'Loading Detail...'
            ) : (
                <div>
                    <img src={movie.medium_cover_image} alt={movie.title} />
                    <h2>{movie.title_long}</h2>
                    <ul>
                        {movie.genres.map((genre) => (
                            <li key={genre}>{genre}</li>
                        ))}
                    </ul>
                    <p>{movie.description_full}</p>
                </div>
            )}
        </div>
    );
}

export default Detail;
