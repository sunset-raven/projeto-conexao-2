class Pessoa {
  #dataDeNascimento;
  #telefone;
  static listaDePacientes = [];
  static listaDeProfissionais = [];

  getDataDeNascimento() {
    return this.#dataDeNascimento;
  }

  getTelefone() {
    return this.#telefone;
  }

  setDataDeNascimento(dataDeNascimento) {
    this.#dataDeNascimento = dataDeNascimento;
  }

  setTelefone(telefone) {
    this.#telefone = telefone;
  }

  testarNumeroDeTelefone(telefone) {
    let numeroTelefone = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (!numeroTelefone.test(telefone)) {
      throw new Error("Telefone não reconhecido!");
    }
  }

  cadastrarPessoa(
    nome,
    dataDeNascimento,
    telefone,
    cidade,
    tipoDePessoa,
    aceitaRemoto
  ) {
    if (typeof nome !== "string") {
      throw new Error("O nome deve ter apenas letras!");
    }
    this.testarNumeroDeTelefone(telefone);
    this.nome = nome;
    this.#dataDeNascimento = dataDeNascimento;
    this.#telefone = telefone;
    this.cidade = cidade;
    this.tipoDePessoa = tipoDePessoa;
    this.aceitaRemoto = aceitaRemoto;
  }

  buscarPessoa(tipoDePessoa, tipoDeBusca, selecaoParaBusca) {
    if (tipoDePessoa.toLowerCase() === "profissional") {
      switch (tipoDeBusca) {
        case "nome":
          const buscaNome = Pessoa.listaDeProfissionais.find(
            (profissional) =>
              profissional.nome.toLowerCase() === selecaoParaBusca.toLowerCase()
          );
          if (!buscaNome) {
            throw new Error("Esse nome não consta na lista!");
          }
          return buscaNome;
        case "cidade":
          const buscaCidade = Pessoa.listaDeProfissionais.filter(
            (profissional) =>
              profissional.cidade.toLowerCase() ===
              selecaoParaBusca.toLowerCase()
          );
          if (buscaCidade.length === 0) {
            throw new Error("Nenhum profissional encontrado.");
          }
          return buscaCidade;
      }
    } else if (tipoDePessoa === "paciente") {
      switch (tipoDeBusca) {
        case "nome":
          const buscaNome = Pessoa.listaDePacientes.find(
            (paciente) =>
              paciente.nome.toLowerCase() === selecaoParaBusca.toLowerCase()
          );
          if (!buscaNome) {
            throw new Error("Esse nome não consta na lista!");
          }
          return buscaNome;
        case "cidade":
          const buscaCidade = Pessoa.listaDePacientes.filter(
            (paciente) =>
              paciente.cidade.toLowerCase() === selecaoParaBusca.toLowerCase()
          );
          if (buscaCidade.length === 0) {
            throw new Error("Nenhum paciente encontrado.");
          }
          return buscaCidade;
      }
    }
  }
}

module.exports = Pessoa;
