import Wrapper from '../Containers/CardWrapperCSS'

function ScoreCard(props){
    return(
        <Wrapper>
            <h1>Quiz Over!</h1>
            <h2>Score: {props.sc}</h2>
            <p className='fw5 opt grow center br2 pa2 ba w-50 pointer'
                onClick={props.handleRetry}
            >
                Try Again
            </p>
        </Wrapper>
    )
}

export default ScoreCard;