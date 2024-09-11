
import { useState } from "react"
import "./Calculadora.css"

const Calculadora = () => {

    const[valorAlcool, setValorAlcool] = useState("0");
    const[valorGasolisa, setValorGasolina] = useState("0");

    const obterValores = (event) => {
        event.preventDefault();

        var razao = valorAlcool / valorGasolisa
        console.log("Álcool : " + valorAlcool + " Gasolina: " + valorGasolisa);

        if(razao < 0.7) {
            alert("Abasteça com Álcool : " + valorAlcool);
        } else {
            alert("Abasteça com Gasolina : " + valorGasolisa);
        }
        
    };

        return (
            <div className="container">

                <div className="header">
                    <img src="src\assets\bomba-de-gasolina.png" alt="combustivel" />
                    <h1>Qual a melhor opção ? </h1>
                </div>

                <form >

                    <div className="alcool">
                        <h2>Álcool (preço por litro)</h2>

                        <input 
                            type="text" 
                            placeholder="R$ 0.00"
                            onChange={(e) => {setValorAlcool(e.target.value)}}
                            />
                    </div>

                    <div className="gasolina">
                        <h2>Gasolina (preço por litro)</h2>

                        <input 
                            type="text" 
                            placeholder="R$ 0.00"
                            onChange={(e) => {setValorGasolina(e.target.value)}}
                            />
                    </div>

                    <div className="calcular">
                        <button type="submit" onClick={obterValores}>Calcular</button>
                    </div>

                </form>

        </div>
    )

}

export default Calculadora