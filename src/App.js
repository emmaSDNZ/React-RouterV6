import { Outlet } from "react-router";
import Navbar from "./Component/Navbar";

const App = () => {   // app es una plantila
    return (
        <div>
           <Navbar/>

           <div className='container'>
               <Outlet/>
           </div>
        </div>
    )
}


export default App;