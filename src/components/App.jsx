//Se usan componenetes funcionales, ya no se usan los de clase//
//Los componentes la primera letra siempre con mayusculas//
//El fichero del componente se suele llamar exactamente que el componnente//
//Siempre lleva return, para renderizar//
import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";

import "../css/App.scss"
import { useState } from "react";
import FormCalculate from "./FormCalculate";
import Result from "./Result";

function App() {
  //Js
  //useState--> hooks (funciones especiales react), las variables de ESTADO

  const [userName, setUserName] = useState("");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [totalOperation, setTotal] = useState(0);
  const sayHi = () => {
    return " ¿Como estas?";
  }
  const handlerInputName = (event) => {
    console.log(event.target.value)
    setUserName(event.target.value)

  }
  const [counts, setCounts] = useState(0);
  const handlerCounts = (event) => {
    event.preventDefault()
    setCounts(counts + 1)
  }
  //Funcion para cambiar las varia de estado num
  const changeNum = (value, id) => {
    const valueNum = parseInt(value); //cambiando el dato string a dato númerico
    // id -> representa a cada input
    if (id === "num1") {
      setNum1(valueNum)
    } else {
      setNum2(valueNum)
    }
  }
  const operation = (operator) => {
    if (operator === "+") {
      setTotal(num1 + num2)
    } else {
      setTotal(num1 - num2)
    }
  }
  const reset = () => {
    setNum1(0);
    setNum2(0);
    setTotal(0);
  }

  return (
    //Etiqueta fragment si vamos a retornar mas de un elemento en una funcion o con un div//
    <>
      <h1>Mi web de React</h1>
      <form action="">
        <input type="text" name="" id="" placeholder="Dime tu nombre" onChange={handlerInputName} />
      </form>
      <button onClickCapture={handlerCounts}> Contador de clicks</button>
      <p>Bienvenida {userName} </p>
      <p>Clicks : {counts}</p>
      <p> {sayHi()} </p>
      {/* este es un comentario especial dentro del html-jsx */}
      <Header />
      <Button title="Login" id={1} classCss="success" />
      <Button title="Registrate" id={2} classCss="info" />
      <Footer instagram="viteREact" x="vite_react" />
      <FormCalculate changeNum={changeNum} operation={operation} reset= {reset} num1={num1} num2={num2}/>
      <Result total = {totalOperation}/>
    </>
  )
}

export default App;
