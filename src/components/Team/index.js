import './Team.css'
import User from '../User'

const Team = (props) => {
    const css = {
        backgroundColor: props.secundaryColor,
    }

    return(
        //renderização condicional
        props.users.length > 0 && <section className='team' style={css}>
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
            <div className='teamUsers'>
                {props.users.map(user => <User background={props.primaryColor} name={user.name} office={user.office} image={user.image} key={user.name}/>)}
            </div>
        </section>
    )
}

export default Team;