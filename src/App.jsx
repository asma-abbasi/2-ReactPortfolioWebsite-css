import React, { useState } from "react";
import './app.scss'
import Topbar from "./component/topbar/Topbar";
import Intro from './component/intro/Intro';
import Portfolio from './component/portfolio/Portfolio';
import Works from './component/works/Works'
import Testimonials from './component/testimonials/Testimonials'
import Contact from './component/contact/Contact'
import Menu from "./component/menu/Menu";
export default function App() {
  const [menuOpen , setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
       <div className="section">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
       </div>
      
    </div>
  );
}
