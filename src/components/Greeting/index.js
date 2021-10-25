import './style.css'

function Greeting({user}) {
    const greeting = () => {
        if(user.firstName) {
          return `${user.firstName} ${user.lastName}`;
        } else {
          return 'desconhecido';
        }
    }

    return <h1>Olá, {greeting()} !</h1>

    
}

export default Greeting;