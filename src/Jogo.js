export default function Jogo({ imagem, palavra, palavras, setClasseLetra, setClassePalavra, classePalavraEscondida, setClassePalavraEscondida, setDesativado, cor, setImagemForca, setQtdAcertos, setQtdErros, setCor, setClicadas }) {
    function iniciarJogo() {
        let resultado = [];
        let resultadoEscondido = [];

        setImagemForca('assets/forca0.png');
        setQtdAcertos(1);
        setQtdErros(1);
        setCor('preto');
        setDesativado(true);
        setClasseLetra('letra bloqueado');
        setClicadas([]);

        palavra = palavras[Math.floor(Math.random() * palavras.length)];

        for (let i = 0; i < palavra.length; i++) {
            resultadoEscondido.push('_');
            resultado.push(palavra[i]);
        }

        setClasseLetra('letra ativo');
        setClassePalavra(resultado);
        setClassePalavraEscondida(resultadoEscondido);
        setDesativado(false);
        //console.log(setClassePalavra);
    }

    return (
        <div class="jogo">
            <img class="forca" src={imagem} data-test="game-image"></img>
            <div class="direita">
                <button
                    class="botao-escolha"
                    onClick={iniciarJogo}
                    data-test="choose-word">
                    Escolher Palavra
                </button>
                <div class={'resposta ' + cor} data-test="word">{classePalavraEscondida}</div>
            </div>
        </div>
    );
}