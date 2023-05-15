import { useState } from "react";

export default function Letras({alfabeto, desativado, setDesativado, classePalavra, classePalavraEscondida, setClassePalavraEscondida, qtdErros, setQtdErros, setimagemForca, clicadas, setClicadas, setCor}) {
    
    function selecionaLetra(letraSelecionada) {
        const novoClicada = [...clicadas, letraSelecionada];
        setClicadas(novoClicada);
    
        if (classePalavra.includes(letraSelecionada)) {
          acertou(letraSelecionada);
        }
        else {
          errou();
        }
      }

      function acertou(letraSelecionada) {
        let novoArr = classePalavraEscondida;
        console.log(novoArr);
        for (let i = 0; i < classePalavra.length; i++) {
            if (letraSelecionada == classePalavra[i]) {
                novoArr[i] = letraSelecionada;
            }
        }

        setClassePalavraEscondida(novoArr);

        if (novoArr.join('') == classePalavra.join('')) {
            ganhou();
        }
      }

      function errou() {
        setQtdErros(qtdErros + 1);
        switch (qtdErros) {
          case 1:
            setimagemForca("assets/forca1.png");
            break;
          case 2:
            setimagemForca("assets/forca2.png");
            break;
          case 3:
            setimagemForca("assets/forca3.png");
            break;
          case 4:
            setimagemForca("assets/forca4.png");
            break;
          case 5:
            setimagemForca("assets/forca5.png");
            break;
          case 6:
            setimagemForca("assets/forca6.png");
            perdeu();
            break;
          default:
            console.log('erro');  
        }
      }

      function ganhou() {
        console.log('ganhou')
        setDesativado('true');
        setClassePalavraEscondida(classePalavra);
        setCor('verde');
      }

      function perdeu() {
        console.log('perdeu')
        setDesativado('true');
        setClassePalavraEscondida(classePalavra);
        setCor('vermelho');
      }

    return (
        <div class="letras">
            {alfabeto.map ( (letra) => <button 
                                        disabled={desativado || clicadas.includes(letra)}
                                        class={clicadas.includes(letra) || desativado ? "letra bloqueado" : "letra ativado"}
                                        key={letra}
                                        onClick={() => selecionaLetra(letra)}
                                        data-test="letter"> 
                                        { letra.toUpperCase() } 
                                      </button>) }
        </div>
    );
}