import Letras from './Letras';
import Jogo from './Jogo';
import palavras from './palavras';
import { useState } from 'react';


export default function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const [imagemForca, setimagemForca] = useState("assets/forca0.png");
  const [desativado, setDesativado] = useState(true);
  const [classePalavra, setClassePalavra] = useState([]);
  const [classePalavraEscondida, setClassePalavraEscondida] = useState([]);
  const [classeLetra, setClasseLetra] = useState('letra bloqueado');
  const [qtdErros, setQtdErros] = useState(1);
  const [qtdAcertos, setQtdAcertos] = useState(1);
  const [clicadas, setClicadas] = useState([]);
  const [cor, setCor] = useState('preto');
  let palavra;
  let resultado = [];





  function fimDoJogo() {

  }



  return (
    <div class="main">
      <Jogo
        imagem={imagemForca}
        palavra={palavra}
        palavras={palavras}
        classeLetra={classeLetra}
        setClasseLetra={setClasseLetra}
        classePalavra={classePalavra}
        setClassePalavra={setClassePalavra}
        classePalavraEscondida={classePalavraEscondida}
        setClassePalavraEscondida={setClassePalavraEscondida}
        setDesativado={setDesativado}
        cor={cor}
      />

      <Letras
        alfabeto={alfabeto}
        desativado={desativado}
        setDesativado={setDesativado}
        classePalavra={classePalavra}
        classePalavraEscondida={classePalavraEscondida}
        setClassePalavraEscondida={setClassePalavraEscondida}
        qtdErros={qtdErros}
        setQtdErros={setQtdErros}
        setimagemForca={setimagemForca}
        clicadas={clicadas}
        setClicadas={setClicadas}
        setCor={setCor}
        qtdAcertos={qtdAcertos}
        setQtdAcertos={setQtdAcertos}
      />
    </div>
  );
}
