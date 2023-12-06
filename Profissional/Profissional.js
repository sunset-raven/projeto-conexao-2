const Pessoa = require("../Pessoa/Pessoa");
const Paciente = require("../Paciente/Paciente");

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
    this.agenda = [
      {
        dia: "segunda",
        horario: {
          "09:00": undefined,
          "10:00": undefined,
          "11:00": undefined,
          "14:00": undefined,
          "15:00": undefined,
          "16:00": undefined,
        },
      },
      {
        dia: "terça",
        horario: {
          "09:00": undefined,
          "10:00": undefined,
          "11:00": undefined,
          "14:00": undefined,
          "15:00": undefined,
          "16:00": undefined,
        },
      },
      {
        dia: "quarta",
        horario: {
          "09:00": undefined,
          "10:00": undefined,
          "11:00": undefined,
          "14:00": undefined,
          "15:00": undefined,
          "16:00": undefined,
        },
      },
      {
        dia: "quinta",
        horario: {
          "09:00": undefined,
          "10:00": undefined,
          "11:00": undefined,
          "14:00": undefined,
          "15:00": undefined,
          "16:00": undefined,
        },
      },
      {
        dia: "sexta",
        horario: {
          "09:00": undefined,
          "10:00": undefined,
          "11:00": undefined,
          "14:00": undefined,
          "15:00": undefined,
          "16:00": undefined,
        },
      },
    ];
    Pessoa.listaDeProfissionais.push(this);
  }

  buscarDia(dia) {
    const buscandoDia = this.agenda.findIndex(
      (diaBuscado) => diaBuscado.dia === dia
    );
    return buscandoDia;
  }

  cadastrarConsulta(dia, horario, nomePaciente) {
    const busca = Pessoa.listaDePacientes.find(
      (paciente) => paciente.nome === nomePaciente
    );
    if (!busca) {
      throw new Error(`${nomePaciente} não é um paciente cadastrado!`);
    }
    const buscandoDia = this.buscarDia(dia);
    const buscandoHorario = this.agenda[buscandoDia].horario[horario];
    if (buscandoHorario !== undefined) {
      throw new Error("Horário não disponível");
    }
    this.agenda[buscandoDia].horario[horario] = nomePaciente;
    const consultaMarcada = {
      dia: dia,
      horario: horario,
      profissional: this.nome,
    };
    const paciente = Pessoa.listaDePacientes.find(
      (paciente) => paciente.nome === nomePaciente
    );
    paciente.consultasMarcadas.push(consultaMarcada);
    return "Você marcou sua consulta com sucesso!";
  }

  cancelarConsulta(dia, horario) {
    const buscandoDia = this.buscarDia(dia);
    const nomeInscrito = this.agenda[buscandoDia].horario[horario];
    if (nomeInscrito === undefined) {
      throw new Error("Não há nenhuma consulta marcada neste horário.");
    }
    const paciente = Pessoa.listaDePacientes.find(
      (nome) => nome.nome === nomeInscrito
    );
    const indexConsulta = paciente.consultasMarcadas.findIndex(
      (diaBuscado) => diaBuscado.dia === dia
    );
    paciente.consultasMarcadas.splice(indexConsulta, 1);
    this.agenda[buscandoDia].horario[horario] = undefined;
    return "Consulta cancelada com sucesso.";
  }

  destruir() {
    let index = Pessoa.listaDeProfissionais.indexOf(this);
    Pessoa.listaDeProfissionais.splice(index, 1);
  }
}

module.exports = Profissional;
