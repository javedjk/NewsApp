import React, { Component } from 'react'


export class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <img src={imageUrl ? imageUrl : "https://www.niddk.nih.gov/-/media/Images/Components/News-And-Meetings/news-generic.png"} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}....</h5>
        <p className="card-text">{description}....</p>
        <a href={newsUrl} target='_blank' className="btn btn-primary">Read more</a>
         </div>
         </div>
      </div>
    )
  }
}

export default NewsItem
