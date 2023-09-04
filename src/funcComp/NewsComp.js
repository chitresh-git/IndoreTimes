import React, { useState, useEffect, Component } from 'react'
import NewsItem from './NewsItem' // importing the component from the newsItem 
import PropTypes from 'prop-types'
import Loading from './Loading';


const NewsComp = (props) => {
  // articles = []// this is an array
  const [articles, setarticles] = useState([])
  const [page, setpage] = useState(1)
  const [Loadings, setLoading] = useState(false)
  const [totalArticles, settotalArticles] = useState(0)

  // constructor() { // declaring the constructor 
  //   super() // whenever we use the constructor it is necessary to call the super() otherwise it will throw an error in browser
  //   // console.log("this is constuctor")

  //   state = {// declaring state
  //     articles: articles, // declaring the state using the articles array which is initially empty
  //     page: 1, // this state will used for page number of site 
  //     Loading:false ,// this state will be use for spinner of laoding component 


  //   }
  // }




  const fetchData = async () => {
    props.progress(25)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=21`
    // using the value for country as props
    props.progress(50)
    setLoading(true)
    // setState({Loading:true}) // setting the loading state true so that it will show the spinner
    document.title = `The Indore Times - ${props.country}/${props.category}`

    let data = await fetch(url) // this fetch the data from the api link 
    let parsedata = await data.json() // this will convert fetched data into json format 
    props.progress(75)
    setarticles(parsedata.articles)
    settotalArticles(parsedata.totalResults)
    setLoading(false)

    // setState({ articles: parsedata.articles,// setState() will change the state to the parsedata which contains json data
    // totalArticles: parsedata.totalResults, // this will fetched total number of articles available 
    // Loading:false
    //    })

    props.progress(100)

  }


  // constructor -> render()-> comonentDidMount()

  useEffect(() => {

    fetchData()
  }, [])
  // const componentDidMount=async()=> { // componentDidMount will envoked after the execution of render() method 


  // }

  const next = async () => {
    console.log(page)
    let temp = page + 1
    setpage(temp)
    console.log(page)
    fetchData()

    // setState({

    //   page: page + 1,// increasing the state of page by one 

    // })
  }

  const previous = async () => {
    let temp = page - 1

    setpage(temp)
    fetchData()



    // setState({

    //   page: page - 1, // decreasing the state of page by 1


    // })

  }






  return (
    <div className='container ' id='body'>


      <h2 className='mt-5 mb-1 text-uppercase '> TOP HEADLINES  :          {props.category} </h2>
      <h6 style={{ color: "grey" }}>Showing {totalArticles} results </h6>  {/* showing the total number of articles available for reading  */}


      {Loadings && <Loading />}  {/* if loading state is true then it will show the loading spinner */}


      <div className="row my-5">


        {/* the state will iterate through each and every object of an array  */}
        { articles.map((element) => { // using the element we can access each attribute of the array object
          // if state of Loading is flase then only it wil  iterate through every element of array and show cards
          return <div className="col-md-4" key={element.url}>  {/* we have to pass an unique key so that state can differentiate in between every object of an array */}

            {/* a bootstrap columns is divided into 12 equal spans md-4 means 12/4=3 it is divided into 3 spans  */}
            {/* <NewsItem title={element.title} disc={element.description.slice(0,60)} imgurl={element.urlToImage} newsurl={element.url}/> passing the props to the newsItem component */}
            <NewsItem title={element.title} disc={element.description ? element.description.slice(0, 60) : ""} imgurl={element.urlToImage ? element.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGQfyfGm11Nphp6TuVBX4YbgfJJHAodyCfw&usqp=CAU"} newsurl={element.url} author={element.author} publishTime={element.publishedAt} source={element.source.name} /> {/* passing the props to the newsItem component */}
            {/* we have used ternary operator in urlToImage if image url is not available in the json data then it will show the hardcoded image */}
          </div>


        })}








      </div>
      <div className="container d-flex justify-content-between my-5">

        {/* if we click on the previous button then it will invoke the previous() method */}
        <button disabled={page <= 1} type="button" class="btn btn-dark" onClick={previous}>&larr; PREVIOUS</button>{/* dibaling the previous button if the state of the previous button is less than one  */}
        {/* in above code &larr is the html code for arrow symbol  */}

        <h6>PAGE {page}/{Math.ceil(totalArticles / 21)}</h6> {/* showing the page number using state of page and number of totalArticles */}
        {/* we divided the totalArticles with 21 because we wanted to show the 21 articles on single page  */}

        {/* if we click on the next button then it will invoke the previous() method */}
        <button disabled={page + 1 > Math.ceil(totalArticles / 21)} type="button" class="btn btn-dark" onClick={next}>NEXT &rarr;</button> {/* disabling the next button using state of totalArticles */}

      </div>
    </div>
  )
}






export default NewsComp

NewsComp.defaultProps = {// declaring the default prop types 
  country: "in",
  category: "general"
}
NewsComp.propTypes = { // decalring the data type of prop types  
  country: PropTypes.string,
  category: PropTypes.string,
}
