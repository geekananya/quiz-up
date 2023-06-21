import React, {Component} from 'react'
import Question from '../Components/Question'
import Options from '../Components/Options'
import Wrapper from './CardWrapperCSS'

class Quiz extends Component{

    constructor(){
        super();
        this.state = {
            ques: [],
            id: 0,
            score: 0
        }
    }
    
    componentDidMount(){
        fetch("https://the-trivia-api.com/v2/questions/")
            .then(response=> response.json())
            .then(questions => {
                this.setState({
                    ques: questions
                });
            })
    }
    
    onAnswer = (event)=>{
        const {ques, id, score}=this.state;
        let ans = event.target.innerHTML;
        this.setState({
            id: id+1
        });
        if(ques[id].correctAnswer === ans)
        {
            this.setState({
                score: score +1
            })
            console.log(ans, `score: ${score + 1}`);
            return;
        }
        console.log(ans, `score: ${score}`);
    }

    render(){
        const {ques, id, score}=this.state;
        if(!ques.length)
            return(
                <Wrapper>
                    <h1>Loading Questions...</h1>
                </Wrapper>
            )
        if(id === 5)
            this.props.endQuiz(score);
        else
        {
            /*randomise option order*/
            const opts = JSON.parse(JSON.stringify(ques[id].incorrectAnswers));
            opts.push(ques[id].correctAnswer);
            opts.sort(() => Math.random() - 0.5);

            return(
                <Wrapper>
                    <p className='mb1'>{id+1} of 5</p>
                    <Question q={ques[id].question.text}/>
                    <Options handleAnswer={this.onAnswer} op={opts}/>
                </Wrapper>
            );
        }
    }
}

export default Quiz;