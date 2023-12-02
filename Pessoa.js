// import { Profissional } from "./Profissional.js";
// import { Paciente } from "./Paciente.js";

const Profissional = require("./Profissional");
const Paciente = require("./Paciente");

class Pessoa {
  #dataDeNascimento;
  #telefone;

  get getDataDeNascimento() {
    return this.#dataDeNascimento;
  }

  get getTelefone() {
    return this.#telefone;
  }

  set setDataDeNascimento(dataDeNascimento) {
    this.#dataDeNascimento = dataDeNascimento;
  }

  set setTelefone(telefone) {
    this.#telefone = telefone;
  }

  numeroDeTelefone(telefone) {
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
    this.numeroDeTelefone(telefone);
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
          const buscaNome = Profissional.listaDeProfissionais.find(
            (profissional) =>
              profissional.nome.toLowerCase() === selecaoParaBusca.toLowerCase()
          );
          if (!buscaNome) {
            throw new Error("Esse nome não consta na lista!");
          }
          return buscaNome;
        case "cidade":
          const buscaCidade = Profissional.listaDeProfissionais.filter(
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
          const buscaNome = Paciente.listaDePacientes.find(
            (paciente) =>
              paciente.nome.toLowerCase() === selecaoParaBusca.toLowerCase()
          );
          if (!buscaNome) {
            throw new Error("Esse nome não consta na lista!");
          }
          return busca;
        case "cidade":
          const buscaCidade = Paciente.listaDePacientes.filter(
            (paciente) =>
              paciente.cidade.toLowerCase() === selecaoParaBusca.toLowerCase()
          );
          if (buscaCidade.length === 0) {
            throw new Error("Nenhum profissional encontrado para esta cidade.");
          }
          return buscaCidade;
      }
    }
  }
}

module.exports = { Pessoa };
