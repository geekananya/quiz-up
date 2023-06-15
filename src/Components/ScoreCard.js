import Card from './Card'

function ScoreCard(props){
    return(
        <Card>
            <h1>Quiz Over!</h1>
            <h2>Score: {props.sc}</h2>
            <p className='fw5 opt grow center br2 pa2 ba w-50 pointer'
                onClick={props.handleRestart}
            >
                Try Again
            </p>
        </Card>
    )
}

export default ScoreCard;