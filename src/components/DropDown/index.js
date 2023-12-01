import './DropDown.css'

const DropDown = (props) => {
    return(
        <div className='DropDown'>
            <label>{props.label}</label>
            <select 
            required={props.obrigatorio} 
            value={props.valor}
            onChange={e => props.Altered(e.target.value)}
            >
            <option value=""></option>
                {props.item.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
};

export default DropDown;