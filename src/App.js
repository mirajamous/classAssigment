// import logo from './logo.svg';
import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
import './App.css';
import react from 'react';
import SecoundComp from "./SecoundComp.js"
import Post from "./Post.js"
import Comment from "./Comment.js"
import CommentContent from "./CommentContent";




class App extends react.Component{
  constructor(props){
    super(props);
    this.state = {
    

    }

  }
  render() {
    return (

      <div >
        <Post />
        <SecoundComp/>
        {/* <Comment />
        <CommentContent /> */}
      </div>

    );

  }

}

export default App;
