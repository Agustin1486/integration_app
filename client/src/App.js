import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/nav/Nav";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom"
import About from "./components/about/About";
import  Detail  from "./components/detail/Detail";
import Form from "./components/form/Form";


function App() {
  const navigate = useNavigate()
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false)
  const username = "agus@henry.com";
  const password = "henry123"
  console.log(useState)
  useEffect(() => { 
    !access && navigate('/');
 },[access]);

  function login(userData){
    
     if(userData.username === username && userData.password === password){
      setAccess(true)
      navigate("/home")
     }
  }

  /*  const example = {
    name: "Morty Smith",
    species: "Human",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    
  }; */
  const onSearch = (id) => {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        ( 
        data.name
        ? characters.filter((char)=> char.id === data.id).length === 0 : ""

        )
          ? setCharacters([...characters, data])
          : alert("El personaje NO se encuentra en este universo");
      })
      .catch((error) => console.log(error));
  };

  const onClose = (id) => {
    const filtered = characters.filter((char)=>char.id !== Number(id))
    setCharacters(filtered)

  }

  return (
    <div className="App" style={{ padding: "25px" }}>

      {
        location.pathname !== "/" && <Nav onSearch={onSearch} /> 
      }
           
      <Routes>

      <Route path="/" element= {<Form login={login}/> } />
      <Route path="/home" element= {<Cards characters={characters} onClose={onClose}/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/detail/:detailId" element= {<Detail/>}/>
      </Routes>
    </div>
  );
} 

export default App;  
