import './App.css';
import { API_ID, API_KEY } from "./Api/Api"
import   axios  from "axios"
import {useState} from "react"



function App(){
  const [query,setQuery]= useState("")

  const url =  `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
  async function getReceipe(){
     const result = await axios.get(url);
     console.log(result.data);
  }
  const onSubmit=(e)=>{
    e.preventDefault()
    getReceipe();
  }
 
  return (
    <div className="App">
      <h1>Choose your Favourite Foood!!</h1>
      <form className={"app-searchform"} onSubmit={onSubmit}>
        <input className='app-input' type="text" placeholder={"Enter your ingirdient"} value={query} onChange={(event)=>{setQuery(event.target.value)}} />
        <input className='submit-button' type="submit" value={"Search"}/>
      </form>
    </div>
  );
}

export default App;
