import './App.css';
import { API_ID, API_KEY } from "./Api/Api"
import axios from "axios"


function App() {
  const url =  `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
  
 function getReceipe(){

 }

  return (
    <div className="App">
      <header className="App-header">
        <h1>hello world</h1>
      </header>
    </div>
  );
}

export default App;
