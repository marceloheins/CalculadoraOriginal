import React, { useState } from "react";
import * as S from "./Style";

function App() {
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();

  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
  };
  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
  };
  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };
  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };
  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
  };
  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };

  return (
    <S.main>
      <S.GlobalStyle />
      <S.h1>Calculadora</S.h1>
      {/* onChange evento de mudança */}
      <S.input type="number" onChange={capturandoPrimeiroValor} />
      <S.input onChange={capturandoSegundoValor} />
      <section>
        <S.button onClick={soma}>+</S.button>
        <S.button onClick={subtracao}>-</S.button>
        <S.button onClick={multiplicacao}>x</S.button>
        <S.button onClick={divisao}>/</S.button>
      </section>
      <S.h3>{resultado}</S.h3>
    </S.main>
  );
}
export default App;
