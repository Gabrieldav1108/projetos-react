import { useState } from 'react';
import Button from '../Button';
import CampText from '../CampText';
import DropDown from '../DropDown';
import './Form.css';

const Form = (props) => {

    //função que vai ser ativada quando o formulario for enviado
const save = (e) => {
    e.preventDefault();
    props.registeredUser({
        name,
        office,
        image,
        team
    })
}

//estados dos inputs
const [name, setName] = useState('')
const [office, setOffice] = useState('')
const [image, setImage] = useState('')
const [team, setTeam] = useState('')

    return (
        //seção do formulario
        <section className='formulario'>
            <form onSubmit={save}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                {/*campos de escrita vindo do CampText junto com os parametros */}

                <CampText 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite seu nome" 
                valor={name}
                Altered={valor => setName(valor)}
                />

                <CampText 
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite seu cargo" 
                valor={office}
                Altered={valor => setOffice(valor)}
                />

                <CampText 
                label="Imagem" 
                placeholder="Informe o endereço da imagem" 
                valor={image}
                Altered={valor => setImage(valor)}
                />

                {/*campo de opções vindo do DropTown passando de parametro os times */}
                <DropDown 
                obrigatorio={true} 
                label="Time" 
                item={props.nameOfTeams}
                valor={team}
                Altered={valor => setTeam(valor)}
                />

                <Button name="Criar Card"/>
            </form>
        </section>
    )
}

export default Form;