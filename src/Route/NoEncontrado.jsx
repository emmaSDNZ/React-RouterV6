import { Link } from "react-router-dom";

const NoEncontrado = () =>{
    return (
        <div>
            <h2>
                error 404
               <Link to='/' className='btn btn-outline-primary'>Incio</Link>
            </h2>
        </div>
    )
}
export default NoEncontrado;