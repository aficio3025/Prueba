import logo from './logo.svg';
import './App.css';
import axios from "axios";
const options = {
  params: {
json:true,
fragment:true,
   },
  headers: {
"x-rapidapi-key": "79f4c56d84mshfa517078ba2c66ap1fb53djsnf3b7e18c48f0",
"x-rapidapi-host": "numbersapi.p.rapidapi.com",
useQueryString: true

  }
}

function App() {
const consulta = () => {

  axios.get("https://numbersapi.p.rapidapi.com/1977/year", options)
.then(respuestas => {
console.log(respuestas)

}
  )

}












  return (
    <div className="proyecto">
      <div className= "marco">
        <div className= "perfil">
          <div className= "abatar"></div>
          <p>texto</p>
        </div>

        <div className= "foto">
          <div className= "imagen"></div>
          <button onClick={consulta}> enviar </button>
        </div>
      

 
      </div>
    </div>


  )
}

export default App;
