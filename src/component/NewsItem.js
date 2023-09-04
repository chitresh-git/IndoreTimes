import React, { Component } from 'react'
import './comp.css';

export class NewsItem extends Component {

  render() {
    let { title, disc, imgurl, newsurl, author, publishTime, source } = this.props // declaring the props in class based component {destructuring of props }
    return (
<>



      <a id="itemlink" href={newsurl} target="_blank">
        <div id='card' class="card  p-3 mb-5 bg-body-tertiary rounded" style={{ width: "20rem" }}>  {/* the style should be changed acording to the jsx */}

          <img src={imgurl} class="card-img-top" alt="..." />
          <div class="card-body" >
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{disc}......</p>

            <footer class="blockquote-footer"> by {author ? author : source} <br></br> {new Date(publishTime).toUTCString()} </footer>


            <a href={newsurl} target="_blank" className="btn btn-sm btn-dark">READ MORE</a>
            {/* target blank is used to open a page in new tab */}

          </div>
        </div>
      </a>
</>
    )
  }
}
export default NewsItem
