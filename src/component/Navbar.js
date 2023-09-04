import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './comp.css';



export class Navbar extends Component {

  constructor() {
    super()
    this.state = {
      country: "india"
    }
  }

  setstatemethod=(value)=>{
    this.setState({
      country:value,
      linkDisable:""
    })
    if (value!="india"&& value!="us"){
      this.setState({
       linkDisable:"disabled"
      })
    }

  }

  render() {
    return (
      <div>
        <nav id='nav' class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
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
            
                  <li><Link className="dropdown-item" to="/india" onClick={()=>{this.setstatemethod("india")}}>INDIA</Link></li>
                  <li><Link className="dropdown-item" to="/us" onClick={()=>{this.setstatemethod("us")}}>US</Link></li>
                  <li><Link className="dropdown-item" to="/uk" onClick={()=>{this.setstatemethod("uk")}}>UK</Link></li>
                  <li><Link className="dropdown-item" to="/china" onClick={()=>{this.setstatemethod("china")}}>CHINA</Link></li>
                  <li><Link className="dropdown-item" to="/france" onClick={()=>{this.setstatemethod("france")}}>FRANCE</Link></li>
                  <li><Link className="dropdown-item" to="/japan" onClick={()=>{this.setstatemethod("japan")}}>JAPAN</Link></li>
                  <li><Link className="dropdown-item" to="/russia" onClick={()=>{this.setstatemethod("russia")}}>RUSSIA</Link></li>
                  <li><Link className="dropdown-item" to="/australia" onClick={()=>{this.setstatemethod("oceania")}}>OCEANIA</Link></li>

                  <li><hr className="dropdown-divider" /></li>

                  <li><Link className="dropdown-item" to="/world" onClick={()=>{this.setstatemethod("world")}} >WORLD</Link></li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link fw-bold fst-italic" to="#">{this.state.country.toUpperCase()}</Link>
              </li>




              <li className='nav-item'><Link className={`nav-link ${this.state.linkDisable}`} to={`${this.state.country}/business`}>BUSINESS</Link></li>
              <li className="nav-item"><Link className={`nav-link ${this.state.linkDisable}`} to={`${this.state.country}/entertainment`}>ENTERTAINMENT</Link></li>
              <li className='nav-item'><Link className={`nav-link ${this.state.linkDisable}`} to={`${this.state.country}/sports`}>SPORTS</Link></li>
              <li className='nav-item'><Link className={`nav-link ${this.state.linkDisable}`} to={`${this.state.country}/general`}>GENERAL</Link></li>
              <li className='nav-item'><Link className={`nav-link ${this.state.linkDisable}`} to={`${this.state.country}/science`}>SCIENCE</Link></li>
              <li className='nav-item'><Link className={`nav-link ${this.state.linkDisable}`} to={`${this.state.country}/technology`}>TECH</Link></li>
              <li className='nav-item'><Link className={`nav-link ${this.state.linkDisable}`} to={`${this.state.country}/health`}>HEALTH</Link></li>


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

                  <li><Link className="dropdown-item" to="/world" onClick={()=>{this.setstatemethod("world")}} >WORLD</Link></li>
                </ul>
              </li>





            </ul>

          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar



