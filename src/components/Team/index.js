import './Team.css'
import User from '../User'

const Team = (props) => {
    const css = {
        backgroundColor: props.secundaryColor,
    }

    return(

        <section className='team' style={css}>
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
            <User/>
            <User/>
        </section>
    )
}

export default Team;