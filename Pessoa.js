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

class Paciente extends Pessoa {
  #fezTerapia;
  #temDiagnostico;
  #fezTratamento;
  static listaDePacientes = [];

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
    Paciente.listaDePacientes.push(this);
  }
}

class Profissional extends Pessoa {
  static listaDeProfissionais = [];

  cadastrarProfissional(
    nome,
    dataDeNascimento,
    telefone,
    cidade,
    tipoDePessoa,
    aceitaRemoto,
    tipoDeProfissional,
    especialidade,
    disponibilidade
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
    this.disponibilidade = [
      {
        dia: "segunda",
        horario: {
          "09:00": undefined,
          "10:00": "não utilizado",
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

  cadastrarConsulta(dia, horario, nome) {
    if (!Paciente.listaDePacientes.find((paciente) => paciente.nome === nome)) {
      throw new Error(`${nome} não é um paciente cadastrado!`);
    }
    const buscandoDia = this.disponibilidade.findIndex(
      (diaBuscado) => diaBuscado.dia === dia
    );
    const buscandoHorario = this.disponibilidade[buscandoDia].horario[horario];
    if (buscandoHorario === "OCUPADO") {
      throw new Error("Horário não disponível");
    }
    this.disponibilidade[buscandoDia].horario[
      horario
    ] = `OCUPADO. Consulta com: ${nome}.`;
    return "Você marcou sua consulta com sucesso!";
  }

  cancelarConsulta(dia, horario) {
    const buscandoDia = this.disponibilidade.findIndex(
      (diaBuscado) => diaBuscado.dia === dia
    );
    this.disponibilidade[buscandoDia].horario[horario] = `Horário vago.`;
    console.log(this.disponibilidade);
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
