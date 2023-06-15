import React from 'react'
import './Options.css'

function Option(props){
    return(
        <div className='f3'>
            {
                props.op.map(opt => 
                <p className='opt grow center br2 pa2 ba pointer'
                    onClick={props.handleAnswer} 
                >
                    {opt}
                </p>)
            }
        </div>
    )
}

export default Option;