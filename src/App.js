import React, { useState } from "react";
import "./styles.css";

const labelNome = (
  <div>
    <h3>Mauricio Aparecido Gabriel Dias</h3>
  </div>
);

export default function App(props) {
  const [i, setI] = useState(0);
  const [nome] = useState("Mauricio Aparecido Gabriel Dias");
  const [mensagem, setMensagem] = useState("");
  const [tentativas, setTentativas] = useState(0);

  const contar = () => {
    setI(i + 1);
    if (i == 9) {
      if (tentativas == 0) {
        setMensagem("Dá uma segurada!");
        setTentativas(tentativas + 1);
      } else if (tentativas == 1) {
        setMensagem("Qual o seu problema?");
        setTentativas(tentativas + 1);
      } else if (tentativas == 2) {
        setMensagem("Chega!");
      }
      setI(0);
    } else {
      setMensagem("");
    }
  };

  return (
    <div className="App">
      <h1>Olá, {props.name}!</h1>
      <h1>Sou o {nome}</h1>
      <h2>Essa é minha primeira aplicação em ReactJS!</h2>
      {labelNome}
      <button onClick={contar}>Contar</button>
      <h3>Contador: {i}</h3>
      <h3>{mensagem}</h3>
    </div>
  );
}
