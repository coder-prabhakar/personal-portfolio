import "./css/navbar.css"
import React, { useState } from "react";

function Navbar() {

  // // Navbar scroll active
  const [scrollNavbar, activeScrollNavbar] = useState("navbar");
  window.onscroll = () => {
    if(window.scrollY > 0){
      activeScrollNavbar("navbar navbar-scroll-active")
    } else {
      activeScrollNavbar("navbar")
    }
  }

  // Navbar Active
  const [header, headerActive] = useState("header header-active");
  const [navbar, activeNavbar] = useState("fa-solid fa-bars");
  function navbarActive(){
    if(navbar === "fa-solid fa-bars"){
      activeNavbar("fa-solid fa-xmark");
      activeScrollNavbar("navbar navbar-active")
      headerActive("header")
    } else {
      activeNavbar("fa-solid fa-bars");
      activeScrollNavbar("navbar")
      setTimeout(() => {
        headerActive("header header-active")
      }, 500);
    }
  }

  function navbarClicked(){
    if(navbar === "fa-solid fa-xmark"){
      activeNavbar("fa-solid fa-bars");
      activeScrollNavbar("navbar")
      setTimeout(() => {
        headerActive("header header-active")
      }, 500);
    }
  }

  return (
    <div>
      <div className={scrollNavbar}>
        <a onClick={navbarClicked} href="#home">HOME</a>
        <a onClick={navbarClicked} href="#about">ABOUT</a>
        <a onClick={navbarClicked} href="#skills">SKILLS</a>
        <a onClick={navbarClicked} href="#projects">PROJECTS</a>
        <a onClick={navbarClicked} href="#contact">CONTACT</a>
      </div>
      <div className={header}>
        <p style={{color:"black"}}>Pr<span style={{color:"#0891B2"}}>abhak</span>ar</p>
        <button id="menu-btn" onClick={navbarActive} class={navbar}></button>
      </div>
    </div>
  )
}

export default Navbar