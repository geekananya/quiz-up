import React, {Component} from 'react'
import Question from '../Components/Question'
import Options from '../Components/Options'
import Card from '../Components/Card'
import {ques, options} from './database'
import answers from './answers'

class Quiz extends Component{

    constructor(){
        super();
        this.state = {
            i: 0,              //for tracking q no.
            score: 0
        }
    }
    
    onAnswer = (event)=>{
        const {i, score}=this.state;
        let ans = event.target.innerHTML;
        this.setState({
            i: i+1
        });
        if(answers[i] === ans)
        {
            this.setState((prev)=>({
                score: prev.score +1
            }))
            console.log(ans, `score: ${score + 1}`);
            return;
        }
        console.log(ans, `score: ${score}`);
        //takes time in logging but not in rendering
    }
    
    render(){
        const {i, score}=this.state;
        if(i === 5)
            this.props.endQuiz(score);
        else
        {
            return(
                <Card>
                    <p className='mb1'>{i+1} of 5</p>
                    <Question ques={ques[i]}/>
                    <Options handleAnswer={this.onAnswer} op={options[this.state.i]}/>
                </Card>
            );
        }
    }
}

export default Quiz;