import { useParams } from 'react-router-dom';
import { useFetch } from '../Hook/useFetch';

const Post = () => {

    const params = useParams () // en post leo la url con el parametro colocado (id)
    const { data, error, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error !== "") {
        return <h1>{error}</h1>;
    }

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>

        </div>
    )
}

export default Post;