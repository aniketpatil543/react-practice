import {BrowserRouter , Routes, Route} from "react-router-dom";
import React from 'react';
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
     <BrowserRouter>
       <Routes>
          <Route element={<Home></Home>} path="/"></Route>
          <Route element={<Contact></Contact>} path="/contact"></Route>
          <Route element={<About></About>} path="/about"></Route>
       </Routes>
     
     </BrowserRouter>
  );
}

export default App;
