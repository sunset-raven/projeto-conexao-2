const Pessoa = require("../Pessoa/Pessoa");
const Agenda = require("../Agenda/Agenda");

class Profissional extends Pessoa {
  cadastrarProfissional(
    nome,
    dataDeNascimento,
    telefone,
    cidade,
    tipoDePessoa,
    aceitaRemoto,
    tipoDeProfissional,
    especialidade
  ) {
    super.cadastrarPessoa(
      nome,
      dataDeNascimento,
      telefone,
      cidade,
      tipoDePessoa,
      aceitaRemoto
    );
    if (tipoDePessoa.toLowerCase() !== "profissional") {
      throw new Error("Você não é um profissional da área de saúde mental!");
    }
    this.tipoDeProfissional = tipoDeProfissional;
    this.especialidade = especialidade;
    const agenda = new Agenda();
    this.agenda = agenda;
    Pessoa.listaDeProfissionais.push(this);
  }



  cadastrarConsulta(dia, horario, nomePaciente) {
    const busca = Pessoa.listaDePacientes.find(
      (paciente) => paciente.nome === nomePaciente
    );
    if (!busca) {
      throw new Error(`${nomePaciente} não é um paciente cadastrado!`);
    }
    const buscandoDia = this.agenda.buscarDia(dia);
    const buscandoHorario = this.agenda.buscarPaciente(buscandoDia, horario);
    if (buscandoHorario !== undefined) {
      throw new Error("Horário não disponível");
    }
    this.agenda.alterarHorario(buscandoDia, horario, nomePaciente);
    const paciente = Pessoa.listaDePacientes.find(
      (paciente) => paciente.nome === nomePaciente
    );
    const nomePro = this.nome;
    paciente.consultas.inserirConsulta(dia, horario, nomePro);
    return "Você marcou sua consulta com sucesso!";
  }

  cancelarConsulta(dia, horario) {
    const buscandoDia = this.agenda.buscarDia(dia);
    const nomeInscrito = this.agenda.dias[buscandoDia].horario[horario];
    if (nomeInscrito === undefined) {
      throw new Error("Não há nenhuma consulta marcada neste horário.");
    }
    const paciente = Pessoa.listaDePacientes.find(
      (nome) => nome.nome === nomeInscrito
    );
    const indexConsulta = paciente.consultas.buscarIndexConsulta(dia, horario, this.nome);
    paciente.consultas.removerConsulta(indexConsulta);
    this.agenda.alterarHorario(buscandoDia, horario, undefined);
    return "Consulta cancelada com sucesso.";
  }

  destruir() {
    let index = Pessoa.listaDeProfissionais.indexOf(this);
    Pessoa.listaDeProfissionais.splice(index, 1);
  }
}

module.exports = Profissional;
