import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  articles = []


  constructor(){

    super();
    this.state = {
      articles : this.articles,
      loading : false
    }

  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/everything?q=India&apiKey=c42605fbfdb848d3bffcdc5505851dcf" ;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles : parsedData.articles});

  }



  render() {
    return (
      <div className = "container my-3">
        <h1>Top Headlines</h1>
        <div className = "row">
          {this.state.articles.map((element)=>{
            return <div className = "col-md-4"key={element.url}>
            <NewsItem title = {element.title?element.title.slice(0,45) : ""} description = {element.description?element.description.slice(0,88) : ""}
             imageUrl = {element.urlToImage} newsUrl = {element.url}/>
          </div>
          })}
            

        </div>
    </div>
    )
  }
}

export default News
