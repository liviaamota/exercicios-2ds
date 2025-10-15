function apresentarPessoa(nome, idade) {
    return`Meu nome é ${nome} e tenho ${idade} anos.`
}

const thierry = apresentarPessoa("Thierry", 16)
console.log(thierry)

module.exports = apresentarPessoa