function livro(nome, ano, autor) {
  const nomeMaior = nome.toUpperCase();
  const totalAnos = 2050 - ano;
  const frase = nome + "por" + autor;
  const objeto = {
    nome: nomeMaior,
    TotalAnos,
    frase,
  };
  return objeto;
}

const livroretorno = livro("O senhor dos Anéis", 1954, "J. R. R. TolKien");
console.log(livroRetorno.frase);
