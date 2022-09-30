import Navbar from '../components/Navbar';
import Home from '../views/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Create from '../views/Create';
import BlogDetails from '../views/BlogDetails';
import NotFound from '../views/NOTFOUND';
import Blank from '../views/blank'
import Login from '../views/Login';




const  routes= () => {
    return ( 
        <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route exact path="/"   element={<Home />}/>
              <Route path="/create"   element={<Create />} />
              <Route path="/blog/:id" element={<BlogDetails/>} /> 
              <Route path = "*" element = {<NotFound/>} />
              <Route path = "/blank" element = {<Blank/>} />
              <Route path = "/login" element = {<Login/>} />


  
            </Routes>
          </div>
        </div>
      </Router>
     );
}
 
export default routes ;