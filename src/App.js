import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import User from './components/User';

function App() {

  //Lista de times
  const teams = [{
    name:'Programação',
    primaryColor: '#57C278',
    secundaryColor: '#D9F7E9'
  },
  {
    name:'Front End',
    primaryColor: '#82CFFA',
    secundaryColor: '#E8F8FF'
  },
  {
    name: 'Data Science',
    primaryColor: '#A6D157',
    secundaryColor: '#F0F8E2'
  },
  {
    name: 'Devops',
    primaryColor: '#E06B69',
    secundaryColor: '#FDE7E8'
  },
  {
    name: 'UX Desing',
    primaryColor: '#DB6EBF',
    secundaryColor: '#FAE9F5'
  },
  {
    name: 'Mobile',
    primaryColor: '#FFBA05',
    secundaryColor: '#FFF5D9'
  },
  {
    name: 'Inovação e Gestão',
    primaryColor: '#FF8A29',
    secundaryColor: '#FFEEDF'
  },
]

  const [users, setUsers] = useState([])

  const newUserAdded = (user) => {
    console.log(user)
    setUsers([...users, user])
  }

  return (
    <div className="App">
      <Banner />
      <Form nameOfTeams={teams.map(team => team.name )} registeredUser = {user => newUserAdded(user)}/>
      
      {teams.map(team => <Team name={team.name} key={team.name} primaryColor={team.primaryColor} secundaryColor={team.secundaryColor}/>)}

    </div>
  );
}

export default App;
