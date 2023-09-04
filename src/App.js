import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';

import Navbar from './component/Navbar';
import NewsComp from './component/NewsComp';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export class App extends Component {
  Newsapi=process.env.REACT_APP_newsapi // this will import the environment varible form .env.local file 
  state={
    // Newsapi:"3c7894337e28487baa02802a2f1d2ef0",
    progress:0 // declaring the state for progress bar 
  }
  
  changeProgress=(value)=>{ // function which will change the state of progress 
    this.setState({progress:value})
  }
  render() {
    return (
      <>
      
      
        {/* using the react router for routing  */}
       <Router>  




   
        <LoadingBar  // this tag is imported from the npm package named as react-top-loading-bar
        color='white' // color of bar
        height={3} // this will decide the height of progress bar
        // shadow={true}
        transitionTime={500} // the time taken by the progress bar to get fade in mili second
        progress={this.state.progress} 
      />

        <Navbar />         {/* navbar component */}


      <Routes>

      

 

        <Route exact path='/'  element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="general" country="in" category="general"/>} /> {/* we have to use exact and key so that the page will remounted accoring to the request of the user, key is the most prop if we doesnt pass it then page remains unchanged and our application wont work  */}

          
        

     

        <Route exact path='/us/technology'  element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="technology" country="us" category="technology"/>} />
        <Route exact path='/us/entertainment'  element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="entertainment" country="us" category="entertainment"/>} />
        <Route exact path='/us/sports'  element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="sports" country="us" category="sports"/>} />
        <Route exact path='/us/science'  element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="science" country="us" category="science"/>} />
        <Route exact path='/us/general'  element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="general" country="us" category="general"/>} />
        <Route exact path='/us/health'  element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="health" country="us" category="health"/>} />
        <Route exact path='/us/business'  element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="business" country="us" category="business"/>} />

   
        
   
        <Route exact path='/india/entertainment' element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="ine" country="in" category="entertainment" />}/>
        <Route exact path='/india/health' element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="inh" country="in" category="health" />}/>
        <Route exact path='/india/sports' element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="ins" country="in" category="sports" />}/>
        <Route exact path='/india/science' element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="insc" country="in" category="science" />}/>
        <Route exact path='/india/technology' element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="int" country="in" category="technology" />}/>
        <Route exact path='/india/business' element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="inb" country="in" category="business" />}/>
        <Route exact path='/india/general' element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="ingn" country="in" category="general" />}/>

        
        <Route exact path='/india'  element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="in" country="in" category="general" />}/>
        <Route exact path='/us'  element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="us" country="us" category="general"/>} />
        <Route exact path='/china' element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="cn" country="cn" category="general" />}/>
        <Route exact path='/uk' element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="bw" country="gb" category="general" />}/>
        <Route exact path='/france' element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="ine12" country="fr" category="general" />}/>
        <Route exact path='/russia' element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="inh12" country="ru" category="general" />}/>
        <Route exact path='/japan' element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="insc12" country="jp" category="general" />}/>
        <Route exact path='/australia' element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="ins12" country="au" category="general" />}/>
        <Route exact path='/world' element={<NewsComp apikey={this.Newsapi} progress={this.changeProgress} key="int12" country="" category="general" />}/>
       
      </Routes>
        
    
       </Router>
      </>
    )
  }
}

export default App
