
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home';

import { TvShow } from "./Components/Pages/TvShow";
import Movies from './Components/Pages/Movies';
import Data from './Store/store';
import  Video  from './Components/Pages/PlayData';
import { PageNotFound } from './Components/Pages/PageNotFound';
import Login from './Components/Login/Login';
import FrontHome from './Components/HomePage/FrontHome';
import Create from './Components/Registration/RegistrationForm';
import RecntlyAdd from './Components/Pages/RecentlyAdd';
import MyList from './Components/Pages/MyList';
function App() {

  return (
    <>

     <Router>
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/tvshows' element={<TvShow/>}> </Route>
      <Route path='/movies' element={<Movies></Movies>}></Route>
      <Route  path="*" element={<PageNotFound/ >}></Route>
      <Route path='/video' element={  <Video data={Data} />}></Route>
      <Route path='/loginpage' element={<Login/>}></Route>
      <Route  path="/" element={<FrontHome/>}></Route>
      <Route path='/registration' element={<Create/>}></Route>
      <Route path='/recent' element={<RecntlyAdd/>}></Route>
      <Route path='/mylist' element={<MyList/>}></Route>
    
    </Routes>
   </Router>
   
   </>
  );
}

export default App;


/*https://api.themoviedb.org/3/movie/550?api_key=2c2c3f093c896e6fc0c867bebf01a1fe*/