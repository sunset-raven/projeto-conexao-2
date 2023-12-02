// import { Pessoa } from "./Pessoa.js";

const Pessoa = require("./Pessoa");

class Paciente extends Pessoa {
  #fezTerapia;
  #temDiagnostico;
  #fezTratamento;
  static listaDePacientes = [];

  constructor(
    nome,
    dataDeNascimento,
    telefone,
    cidade,
    tipoDePessoa,
    aceitaRemoto,
    fezTerapia,
    temDiagnostico,
    fezTratamento
  ) {
    super.cadastrarPessoa(
      nome,
      dataDeNascimento,
      telefone,
      cidade,
      tipoDePessoa,
      aceitaRemoto
    );
    if (tipoDePessoa.toLowerCase() !== "paciente") {
      throw new Error("Você não é um paciente!");
    }
    this.#fezTerapia = fezTerapia;
    this.#temDiagnostico = temDiagnostico;
    this.#fezTratamento = fezTratamento;
    this.consultasMarcadas = [];
    Paciente.listaDePacientes.push(this);
  }

  get getFezTerapia() {
    return this.#fezTerapia;
  }

  get getTemDiagnostico() {
    return this.#temDiagnostico;
  }

  get getFezTratamento() {
    return this.#fezTratamento;
  }

  cadastrarPaciente(
    nome,
    dataDeNascimento,
    telefone,
    cidade,
    tipoDePessoa,
    aceitaRemoto,
    fezTerapia,
    temDiagnostico,
    fezTratamento
  ) {
    super.cadastrarPessoa(
      nome,
      dataDeNascimento,
      telefone,
      cidade,
      tipoDePessoa,
      aceitaRemoto
    );
    if (tipoDePessoa.toLowerCase() !== "paciente") {
      throw new Error("Você não é um paciente!");
    }
    this.#fezTerapia = fezTerapia;
    this.#temDiagnostico = temDiagnostico;
    this.#fezTratamento = fezTratamento;
    this.consultasMarcadas = [];
    Paciente.listaDePacientes.push(this);
  }
}

module.exports = { Paciente };
