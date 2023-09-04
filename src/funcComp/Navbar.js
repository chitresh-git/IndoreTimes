import React, { Component ,useState} from 'react'
import { Link } from "react-router-dom";
import './comp.css';



const Navbar =(props)=>{
const [country,setcountry]=useState("india")
const [linkDisable,setlinkDisable]=useState("")
  // constructor() {
  //   super()
  //   state = {
  //     country: "india"
  //   }
  // }

  const setstatemethod=(value)=>{
    setcountry(value)
    setlinkDisable("")
    // setState({
    //   country:value,
    //   linkDisable:""
    // })
    if (value!="india"&& value!="us"){
      setlinkDisable("disabled")
      // setState({
      //  linkDisable:"disabled"
      // })
    }

  }

    return (
      <div>
        <nav id='nav' class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
          <Link id='title'class="navbar-brand mx-3" to="/india">The Indore Times</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
            
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  COUNTRY
                </Link>
                <ul className="dropdown-menu">
            
                  <li><Link className="dropdown-item" to="/india" onClick={()=>{setstatemethod("india")}}>INDIA</Link></li>
                  <li><Link className="dropdown-item" to="/us" onClick={()=>{setstatemethod("us")}}>US</Link></li>
                  <li><Link className="dropdown-item" to="/uk" onClick={()=>{setstatemethod("uk")}}>UK</Link></li>
                  <li><Link className="dropdown-item" to="/china" onClick={()=>{setstatemethod("china")}}>CHINA</Link></li>
                  <li><Link className="dropdown-item" to="/france" onClick={()=>{setstatemethod("france")}}>FRANCE</Link></li>
                  <li><Link className="dropdown-item" to="/japan" onClick={()=>{setstatemethod("japan")}}>JAPAN</Link></li>
                  <li><Link className="dropdown-item" to="/russia" onClick={()=>{setstatemethod("russia")}}>RUSSIA</Link></li>
                  <li><Link className="dropdown-item" to="/australia" onClick={()=>{setstatemethod("oceania")}}>OCEANIA</Link></li>

                  <li><hr className="dropdown-divider" /></li>

                  <li><Link className="dropdown-item" to="/world" onClick={()=>{setstatemethod("world")}} >WORLD</Link></li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link fw-bold fst-italic" to="#">{country.toUpperCase()}</Link>
              </li>




              <li className='nav-item'><Link className={`nav-link ${linkDisable}`} to={`${country}/business`}>BUSINESS</Link></li>
              <li className="nav-item"><Link className={`nav-link ${linkDisable}`} to={`${country}/entertainment`}>ENTERTAINMENT</Link></li>
              <li className='nav-item'><Link className={`nav-link ${linkDisable}`} to={`${country}/sports`}>SPORTS</Link></li>
              <li className='nav-item'><Link className={`nav-link ${linkDisable}`} to={`${country}/general`}>GENERAL</Link></li>
              <li className='nav-item'><Link className={`nav-link ${linkDisable}`} to={`${country}/science`}>SCIENCE</Link></li>
              <li className='nav-item'><Link className={`nav-link ${linkDisable}`} to={`${country}/technology`}>TECH</Link></li>
              <li className='nav-item'><Link className={`nav-link ${linkDisable}`} to={`${country}/health`}>HEALTH</Link></li>


              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  MORE
                </Link>
                <ul className="dropdown-menu">
            
                  <li><Link className="dropdown-item" to="/india" >ABOUT</Link></li>
                  <li><Link className="dropdown-item" to="/us" >CONTACT</Link></li>
                  <li><Link className="dropdown-item" to="/us" >JOIN US</Link></li>
                  <li><Link className="dropdown-item" to="/uk" >SUBSCRIPTION</Link></li>
 

                  <li><hr className="dropdown-divider" /></li>

                  <li><Link className="dropdown-item" to="/world" onClick={()=>{setstatemethod("world")}} >WORLD</Link></li>
                </ul>
              </li>





            </ul>

          </div>
        </nav>
      </div>
    )
  }


export default Navbar



