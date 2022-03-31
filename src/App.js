import {FiSearch} from 'react-icons/fi'
import {useState} from 'react'
import  './style.css'
import api from'./service/api'

function App() {

  const [input , setInput] = useState("");
  const [Cep , setCep] = useState("")

  async function lupa(){
    if(input === ''){
      alert("Digite um CEP");
      return
    }

    try{

      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");

    }catch{
      alert("Erro");
      setInput('')
    }
  }
  return (
    <>

    <div className="conteiner">
      <h1 className="title">Bucador de CEP</h1>

      <div className="conteiner__input">
        <input
         typr="text" 
         placeholder="Digite um CEP"
         value={input}
         onChange={(e) => setInput(e.target.value)}
         />

         <button className="btn">
           <FiSearch size={25} color="#fff" onClick={(lupa)}/>
         </button>
      </div>
      {Object.keys(Cep).length > 0 &&(

         <main className="main">
         <h2>CEP : {Cep.cep}</h2>
 
         <span>{Cep.logradouro}</span>
         <span>{Cep.complemento}</span>
         <span>{Cep.bairro}</span>
         <span>{Cep.localidade} - {Cep.uf}</span>
       </main>
 
      )

      }
    </div>

    
    </>
  );
}

export default App;
