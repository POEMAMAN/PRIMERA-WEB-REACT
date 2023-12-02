import propTypes from "prop-types";
function FormCalculate ({changeNum, operation, reset, num1, num2}) {
    //Este proceso en REACT se llama lifting --> ejecuto una fucnion que se encunetra en mi padre
    const handleInput = (event) => {
        changeNum(event.target.value,event.target.id)
    }
    const handleClick = (event) => {
        event.preventDefault();
        operation(event.target.id);
    }
    const handleReset = (event) => {
        event.preventDefault();
        reset();
    }
    return (
        <>
        <h1>Calculadora</h1>
        <form action="">
            <input type="number" placeholder="num1" id="num1" onChange={handleInput} value={num1}/>
            <input type="number" placeholder="num2" id="num2" onChange={handleInput} value={num2}/>
            <button id="+" onClick={handleClick} >+</button>
            <button id="-" onClick={handleClick}>-</button>
            <button type="button" onClick={handleReset}>Reset</button>
        </form>
        </>
    )

}

FormCalculate.propTypes = {
    changeNum: propTypes.func,
    operation: propTypes.func, 
    reset: propTypes.func,
    num1: propTypes.number,
    num2: propTypes.number
}

export default FormCalculate;