import './User.css'

const User = (props) => {
    return (
        <div className='card'>
            <div className='user' style={{backgroundColor: props.background}}>
                <img src={props.image} alt={props.name}/>
            </div>
            <div className='footer'>
                <h4>{props.name}</h4>
                <h5>{props.office}</h5>
            </div>
        </div>
    )
}

export default User