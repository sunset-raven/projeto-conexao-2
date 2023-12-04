const Pessoa = require("../Pessoa/Pessoa");

class Paciente extends Pessoa {
  #fezTerapia;
  #temDiagnostico;
  #fezTratamento;

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
    Pessoa.listaDePacientes.push(this);
  }

  cancelarConsulta(dia, horario, nome) {
    const buscandoConsulta = this.consultasMarcadas.findIndex(
      (diaBuscado) =>
        diaBuscado.dia === dia &&
        diaBuscado.horario === horario &&
        diaBuscado.profissional === nome
    );
    if (buscandoConsulta === -1) {
      throw new Error(
        "Essa consulta não existe ou está marcada para outra pessoa."
      );
    }
    const buscandoMedico = Pessoa.listaDeProfissionais.find(
      (medico) => medico.nome === nome
    );
    const buscandoDia = buscandoMedico.agenda.findIndex(
      (diaBuscado) => diaBuscado.dia === dia
    );
    const nomeInscrito = buscandoMedico.agenda[buscandoDia].horario[horario];
    if (nomeInscrito !== this.nome) {
      throw new Error("Esta consulta não está marcada para esta passoa.")
    }
    buscandoMedico.agenda[buscandoDia].horario[horario] = undefined;
    this.consultasMarcadas.splice(buscandoConsulta, 1);
    return "Consulta cancelada com sucesso.";
  }
}

module.exports = Paciente;
