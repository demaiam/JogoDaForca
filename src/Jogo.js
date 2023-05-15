export default function Jogo({ imagem, palavra, palavras, classeLetra, setClasseLetra, classePalavra, setClassePalavra, classePalavraEscondida, setClassePalavraEscondida, setDesativado, cor }) {
    function iniciarJogo() {
        let resultado = [];
        let resultadoEscondido = [];

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