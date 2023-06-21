import './Card.css'

/*Copy CSS functionality*/
function CardWrapperCSS(props){            
    return(
        <div className='center pv2 shad-1 tc br3 grad gen'>
            {props.children}
        </div>
    )
}

export default CardWrapperCSS;