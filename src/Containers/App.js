import React, {Component} from 'react'
import Quiz from './Quiz'
import ScoreCard from '../Components/ScoreCard'
import './App.css'

class App extends Component{

  constructor(){
    super();
    this.state={
      completed: 0,
      score: 0
    }
  }

  displayScore = (score) =>{
    this.setState({completed: 1, score: score});
  }
  
  doRestart = ()=>{
    this.setState({completed: 0, score:0});
  }

  render(){
    if(this.state.completed)
    {
      return(
        <>
          <ScoreCard sc={this.state.score} handleRestart={this.doRestart}/>
        </>
      )
    }
    else
    {
      return(
        <Quiz endQuiz={this.displayScore}/>
      )
    }
  }
}

export default App;