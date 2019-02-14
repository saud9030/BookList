import React, { Component } from 'react';

import './App.css';

class Book extends Component {
    state= {info :"hide"}
    showInfo =() =>{
        if(this.state.info=== "show"){
          this.setState({info: 'hide'})
        }
        else{
          this.setState({info:"show"})
        }
      }
  render() {
    
    return (
    <React.Fragment>
        <h1>{this.props.book.title}</h1>
        <h3>{this.props.book.subtitle}</h3>
        <h4 onClick={this.showInfo}>Information</h4>
        <div className={this.state.info}>
            <strong>author:</strong> {this.props.book.author} 
            <br/>
            <strong>description:</strong> {this.props.book.description}
            <br/>
            <strong>pages:</strong> {this.props.book.pages}
            <br/>
            <strong>ISBN:</strong> {this.props.book.isbn}
            <br/>
            <strong>publisher:</strong> {this.props.book.publisher}
            <br/>
            <strong>website: </strong> <a href={this.props.book.website}>click here</a>
        </div>
    </React.Fragment>
      

    );
  }
}

export default Book;
