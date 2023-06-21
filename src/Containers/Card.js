import React from 'react';
import ScoreCard from '../Components/ScoreCard';
import Quiz from './Quiz';

class Card extends React.Component{
    
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
    
    doRetry = ()=>{
        this.setState({completed: 0, score:0});
    }

    render(){
        if(this.state.completed)
        {
            return(
                <ScoreCard sc={this.state.score} handleRetry={this.doRetry}/>
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

export default Card;