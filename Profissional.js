// import { Pessoa } from "./Pessoa.js";
// import { Paciente } from "./Paciente.js";

const Pessoa = require("./Pessoa");
const Paciente = require("./Paciente");

class Profissional extends Pessoa {
  static listaDeProfissionais = [];

  constructor(
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
    Profissional.listaDeProfissionais.push(this);
  }

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
    Profissional.listaDeProfissionais.push(this);
  }

  buscarDia(dia) {
    const buscandoDia = this.agenda.findIndex(
      (diaBuscado) => diaBuscado.dia === dia
    );
    return buscandoDia;
  }

  cadastrarConsulta(dia, horario, nome) {
    if (!Paciente.listaDePacientes.find((paciente) => paciente.nome === nome)) {
      throw new Error(`${nome} não é um paciente cadastrado!`);
    }
    const buscandoDia = this.buscarDia(dia);
    const buscandoHorario = this.agenda[buscandoDia].horario[horario];
    if (buscandoHorario === false) {
      throw new Error("Horário não disponível");
    }
    this.agenda[buscandoDia].horario[horario] = nome;
    console.log(this.agenda[buscandoDia]);
    const consultaMarcada = {
      dia: dia,
      hora: horario,
      profissional: this.nome,
    };
    this.consultasMarcadas.push(consultaMarcada);
    return "Você marcou sua consulta com sucesso!";
  }

  cancelarConsulta(dia, horario) {
    const buscandoDia = this.buscarDia(dia);
    this.agenda[buscandoDia].horario[horario] = undefined;
    // const horariosOrdenados = Object.keys(
    //   this.agenda[buscandoDia].horario
    // )
    //   .sort()
    //   .reduce((objeto, chave) => {
    //     objeto[chave] = this.agenda[buscandoDia].horario[chave];
    //     return objeto;
    //   }, {});
    // this.agenda[buscandoDia].horario = horariosOrdenados;
    return "Consulta cancelada com sucesso.";
  }
}

const pessoa1 = new Paciente();
const pessoa2 = new Profissional();
pessoa1.cadastrarPaciente(
  "Andréa",
  "15/12/1984",
  "2196969696",
  "Rio de Janeiro",
  "PACIENTE",
  "sim",
  "sim",
  "tdah e depressão",
  "sim"
);
pessoa2.cadastrarProfissional(
  "Lucia",
  "03/05/1958",
  "2185858585",
  "Rio de Janeiro",
  "profissional",
  "não",
  "arquiteta",
  "urbanismo"
);

console.log(pessoa1.buscarPessoa("profissional", "cidade", "Rio"));

// console.log(pessoa2.cadastrarConsulta("segunda", "10:00", "Andréa"));
// console.log(pessoa2.cancelarConsulta("segunda", "10:00"));

module.exports = { Profissional };
