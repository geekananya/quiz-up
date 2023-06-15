import './Card.css'

function Card(props){
    return(
        <div className='center pv2 shad-1 tc br3 grad gen'>
            {props.children}
        </div>
    )
}

export default Card;