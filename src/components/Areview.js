import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
import ReviewForm from './ReviewForm'
// import Notes from './Notes'
import './Areview.css'


class Areview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', reviewsInfo: [''], reviews: [] , button: false ,formRenderer: false, noteMakerRenderer: false};
    this.handleBackEnd = this.handleBackEnd.bind(this)
    this.makeReview = this.makeReview.bind(this)
    this.settinPage = this.settinPage.bind(this)
    this.getbutton = this.getbutton.bind(this)
console.log(this.state.reviews)
  }


  handleBackEnd() {
    console.log("button clicked reviews")
    const url = '6041f5e00914901cdc48b5c7'
      // this.setState({booktitle: event.target.value});
      const baseUrl = `http://localhost:8080/reviews/`
      axios(baseUrl).then((response) => {
         const info = (response.data)
         console.log(info)
          this.setState({reviews: []})
           info.map((book) => {
             console.log(book.title)
             console.log(this.props.dataFromParent)
             if (book.title === this.props.dataFromParent){
               console.log(book.review)
               this.setState({reviewsInfo: book})
               this.setState({title: book.title})
               // this.setState({reviews: book.review})
               this.state.reviews.push(book.review)
               this.setState({button: true})
             }else{
               this.setState({title: this.props.dataFromParent})
               this.setState({button: true})
             }
           })

      })
  }
  getNotesBackEnd() {
    console.log("button clicked reviews")
    const url = '6041f5e00914901cdc48b5c7'
      // this.setState({booktitle: event.target.value});
      const baseUrl = `http://localhost:8080/notes/`
      axios(baseUrl).then((response) => {
         const info = (response.data)
         console.log(info)
         // var arr1 = this.state.reviews
         // var arr2 = arr1
         //   arr1 = []
           info.map((book) => {
             console.log(book.title)
             // console.log(this.props.dataFromParent)
             if (book.title === this.props.dataFromParent){
               console.log(book.review)
               this.setState({reviewsInfo: book})
               this.setState({title: book.title})
               // this.setState({reviews: book.review})

               this.state.reviews.push(book.review)
               // this.setState({button: true})
             }else{
               this.setState({title: this.props.dataFromParent})
               // this.setState({button: true})
             }
           })

      })
  }

settinPage(){
  this.setState({title: this.props.dataFromParent } )
}

componentDidMount(){
// this.setState({title: this.props.dataFromParent } )
this.settinPage()
setInterval(this.handleBackEnd, 2000)
}

getbutton(){
  this.setState({button: true})
}
makeReview(){

    this.setState({formRenderer: true})
}
makeNotes(){
  this.setState({noteMakerRenderer: true})
  // this.setState({formRenderer: false})
}

 render() {

  return (
  <div className="Notes-Container">



  <div className="button-button-display">
  <button onClick={this.handleBackEnd} className="button1">Reviews</button>
  </div>

<div className="create-review-notes">
{this.state.button ?
  <button onClick={this.makeReview}>Create Review</button>
:null}


  <div>
  {this.state.reviews.map((review) =>
    <p key={review}> {review} </p>
  )}
  </div>
  {this.state.formRenderer ? <ReviewForm data = {this.state.title}/> :null}

  </div>
  </div>
  )
 }
}
export default Areview;
// /<button onClick={this.getNotesBackEnd} className="button2">Notes</button>

// {this.state.formRenderer ? <ReviewForm data = {this.state.title}/> :null}
// {this.state.noteMakerRenderer ? <ReviewForm data = {this.state.title}/> :null}
