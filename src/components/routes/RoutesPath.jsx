import React from 'react';
import { Routes, Route } from "react-router-dom"
import About from '../about/About';
import Home from '../home/home';
import NotFound from '../notFound/NotFound';


function RoutesPath(props) {
    return (
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
    );
}

export default RoutesPath;