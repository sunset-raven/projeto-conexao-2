const Pessoa = require("../Pessoa/Pessoa");
const Consultas = require("../Consultas/Consultas")

class Paciente extends Pessoa {
  #fezTerapia;
  #temDiagnostico;
  #fezTratamento;

  getFezTerapia() {
    return this.#fezTerapia;
  }

  getTemDiagnostico() {
    return this.#temDiagnostico;
  }

  getFezTratamento() {
    return this.#fezTratamento;
  }

  setFezTerapia(fezTerapia) {
    this.#fezTerapia = fezTerapia;
  }

  setTemDiagnostico(temDiagnostico) {
    this.#temDiagnostico = temDiagnostico;
  }

  setFezTratamento(fezTratamento) {
    this.#fezTratamento = fezTratamento;
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
    const consultasMarcadas = new Consultas();
    this.consultas = consultasMarcadas;
    Pessoa.listaDePacientes.push(this);
  }

  cancelarConsulta(dia, horario, nome) {
    const buscandoConsulta = this.consultas.buscarIndexConsulta(dia, horario, nome);
    if (buscandoConsulta === -1) {
      throw new Error(
        "Essa consulta não existe ou está marcada para outra pessoa."
      );
    }
    const buscandoPro = Pessoa.listaDeProfissionais.find(
      (pro) => pro.nome === nome
    );
    const buscandoDia = buscandoPro.agenda.buscarDia(dia);
    buscandoPro.agenda.alterarHorario(buscandoDia, horario, undefined);
    this.consultas.removerConsulta(buscandoConsulta);
    return "Consulta cancelada com sucesso.";
  }

  destruir() {
    let index = Pessoa.listaDePacientes.indexOf(this);
    Pessoa.listaDePacientes.splice(index, 1);
  }
}

module.exports = Paciente;
