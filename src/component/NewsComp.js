import React, { Component } from 'react'
import NewsItem from './NewsItem' // importing the component from the newsItem 
import Loading from './Loading';
import PropTypes from 'prop-types'


export class NewsComp extends Component {
  constructor() { // declaring the constructor 
    super() // whenever we use the constructor it is necessary to call the super() otherwise it will throw an error in browser
    // console.log("this is constuctor")
    
    this.state = {// declaring state
      articles: this.articles, // declaring the state using the articles array which is initially empty
      page: 1, // this state will used for page number of site 
      Loading:false ,// this state will be use for spinner of laoding component 
      
      
    }
  }
   p=1
  static defaultProps={// declaring the default prop types 
    country:"in",
    category:"general"
  }
  static propTypes={ // decalring the data type of prop types  
    country: PropTypes.string,
    category: PropTypes.string,
  }
  articles = []// this is an array
  
  
  
  fetchData=async(value)=>{
    this.props.progress(25)
    console.log(this.state.page)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${value}&pageSize=21`
    // using the value for country as props
    this.props.progress(50)

    this.setState({Loading:true}) // setting the loading state true so that it will show the spinner
    document.title=`The Indore Times - ${this.props.country}/${this.props.category}`
    
    let data = await fetch(url) // this fetch the data from the api link 
    let parsedata = await data.json() // this will convert fetched data into json format 
    this.props.progress(75)

    this.setState({ articles: parsedata.articles,// setState() will change the state to the parsedata which contains json data
    totalArticles: parsedata.totalResults, // this will fetched total number of articles available 
    Loading:false
       })
       this.props.progress(100)

  }

  
// constructor -> render()-> comonentDidMount()

  async componentDidMount() { // componentDidMount will envoked after the execution of render() method 
   
    this.fetchData()
    
  }

  next =() => {
    this.p=this.p+1
    this.setState({   
      page: this.state.page + 1,// increasing the state of page by one   
    })

    this.fetchData(this.p)
  } 

  previous = ()=>{
this.p=this.p-1
    this.setState({
      page: this.state.page - 1, // decreasing the state of page by 1 
    })

    this.fetchData(this.p)

  }

  
   

 
  render() {
    return (
      <div className='container ' id='body'>
       
 
        <h2 className='mt-5 mb-1 text-uppercase '> TOP HEADLINES  :          {this.props.category} </h2>
        <h6 style={{color:"grey"}}>Showing {this.state.totalArticles} results </h6>  {/* showing the total number of articles available for reading  */}


       {this.state.Loading&&<Loading/>}  {/* if loading state is true then it will show the loading spinner */}
      

        <div className="row my-5">

          {/* the state will iterate through each and every object of an array  */}
          {!this.state.Loading&& this.state.articles.map((element) => { // using the element we can access each attribute of the array object
          // if state of Loading is flase then only it wil  iterate through every element of array and show cards

            return <div className="col-md-4" key={element.url}>  {/* we have to pass an unique key so that state can differentiate in between every object of an array */}

              {/* a bootstrap columns is divided into 12 equal spans md-4 means 12/4=3 it is divided into 3 spans  */}
              {/* <NewsItem title={element.title} disc={element.description.slice(0,60)} imgurl={element.urlToImage} newsurl={element.url}/> passing the props to the newsItem component */}
              <NewsItem title={element.title} disc={element.description ? element.description.slice(0, 60) : ""} imgurl={element.urlToImage ? element.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGQfyfGm11Nphp6TuVBX4YbgfJJHAodyCfw&usqp=CAU"} newsurl={element.url}  author={element.author} publishTime={element.publishedAt} source={element.source.name}/> {/* passing the props to the newsItem component */}
              {/* we have used ternary operator in urlToImage if image url is not available in the json data then it will show the hardcoded image */}
            </div>


          })}








        </div>
        <div className="container d-flex justify-content-between my-5">

          {/* if we click on the previous button then it will invoke the this.previous() method */}
          <button disabled={this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.previous}>&larr; PREVIOUS</button>{/* dibaling the previous button if the state of the previous button is less than one  */}
          {/* in above code &larr is the html code for arrow symbol  */}

          <h6>PAGE {this.state.page}/{Math.ceil(this.state.totalArticles / 21)}</h6> {/* showing the page number using state of page and number of totalArticles */}
          {/* we divided the totalArticles with 21 because we wanted to show the 21 articles on single page  */}

          {/* if we click on the next button then it will invoke the this.previous() method */}
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / 21)} type="button" class="btn btn-dark" onClick={this.next}>NEXT &rarr;</button> {/* disabling the next button using state of totalArticles */}
         
        </div>
      </div>
    )
  }

}




export default NewsComp
