import React from "react";
import img from '../assets/morty.png'

const NavBar = () => {
  return (
    <>
      <div>
      <div className="navbar navbar-dark bg-dark">
        <div className="container mt-5" style={{textAlign:'center'}}>
            <div className="container">
                <h1 style={{color:'white'}}> <b style={{color:'#ec991c'}}>API</b> <b style={{color:'#0f7084'}}>Rick</b> and <b style={{color:'#37c01a'}}>Morty</b></h1>
                <p style={{color:'gray'}}>Gilbert E. Tineo</p>
            </div>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default NavBar;
