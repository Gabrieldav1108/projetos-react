import './CampText.css';

const CampText = (props) => {

const Digited = (e) => {
    props.Altered(e.target.value)
}

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input 
                required={props.obrigatorio} 
                placeholder={props.placeholder}
                onChange={Digited}
                value={props.valor}
            />
        </div>
    )
}

export default CampText;