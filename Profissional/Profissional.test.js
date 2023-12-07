const Profissional = require("./Profissional");
const Paciente = require("../Paciente/Paciente");

describe("Testes da classe Profissional", () => {
  //testes de instância
  test("verificar se instância foi criada corretamente", () => {
    const profissional = new Profissional();
    expect(profissional instanceof Profissional).toBe(true);

    profissional.destruir();
  });

  //testes do método cadastrarProfissional
  test("verificar se o método cadastrarProfissional retorna válido", () => {
    const profissional = new Profissional();
    profissional.cadastrarProfissional(
      "ProTest",
      "01/04/1980",
      "2198989898",
      "Rio de Janeiro",
      "profissional",
      "sim",
      "psiquiatra",
      "psicanalista"
    );
    expect(profissional).toEqual({
      nome: "ProTest",
      cidade: "Rio de Janeiro",
      tipoDePessoa: "profissional",
      aceitaRemoto: "sim",
      tipoDeProfissional: "psiquiatra",
      especialidade: "psicanalista",
      agenda: [
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
      ],
    });
    profissional.destruir();
  });

  test("verificar se retorna erro ao informar tipo de pessoa diferente de profissional no método cadastrarProfissional", () => {
    const profissional = new Profissional();
    expect(() =>
      profissional.cadastrarProfissional(
        "ProTest",
        "01/04/1980",
        "2198989898",
        "Rio de Janeiro",
        "paciente",
        "sim",
        "psiquiatra",
        "psicanalista"
      )
    ).toThrow("Você não é um profissional da área de saúde mental!");
  });

  //testes do método cadastrarConsulta
  test("verificar se o método cadastrarConsulta retorna resultado válido", () => {
    const profissional = new Profissional();
    profissional.cadastrarProfissional(
      "ProTest",
      "01/04/1980",
      "2198989898",
      "Rio de Janeiro",
      "profissional",
      "sim",
      "psiquiatra",
      "psicanalista"
    );
    const paciente = new Paciente();
    paciente.cadastrarPaciente(
      "PacienteTest",
      "01/04/1980",
      "2187878787",
      "Rio de Janeiro",
      "paciente",
      "sim",
      "sim",
      "depressão",
      "sim"
    );
    const consulta = profissional.cadastrarConsulta(
      "segunda",
      "11:00",
      "PacienteTest"
    );
    expect(consulta).toBe("Você marcou sua consulta com sucesso!");
    expect(paciente.consultasMarcadas).toEqual([
      {
        dia: "segunda",
        horario: "11:00",
        profissional: "ProTest",
      },
    ]);
    expect(profissional.agenda[0].horario["11:00"]).toEqual("PacienteTest");

    profissional.destruir();
    paciente.destruir();
  });

  test("verificar se o método cadastrarConsulta retorna resultado inválido quando dado um nome não de paciente", () => {
    const profissional = new Profissional();
    profissional.cadastrarProfissional(
      "ProTest",
      "01/04/1980",
      "2198989898",
      "Rio de Janeiro",
      "profissional",
      "sim",
      "psiquiatra",
      "psicanalista"
    );

    expect(() =>
      profissional.cadastrarConsulta("segunda", "11:00", "Nobody")
    ).toThrow("Nobody não é um paciente cadastrado!");

    profissional.destruir();
  });

  test("verificar se o método cadastrarConsulta retorna resultado inválido quando dada data já ocupada", () => {
    const profissional = new Profissional();
    profissional.cadastrarProfissional(
      "ProTest",
      "01/04/1980",
      "2198989898",
      "Rio de Janeiro",
      "profissional",
      "sim",
      "psiquiatra",
      "psicanalista"
    );
    const paciente = new Paciente();
    paciente.cadastrarPaciente(
      "PacienteTest",
      "01/04/1980",
      "2187878787",
      "Rio de Janeiro",
      "paciente",
      "sim",
      "sim",
      "depressão",
      "sim"
    );
    profissional.cadastrarConsulta("segunda", "11:00", "PacienteTest");

    expect(() =>
      profissional.cadastrarConsulta("segunda", "11:00", "PacienteTest")
    ).toThrow("Horário não disponível");

    profissional.destruir();
    paciente.destruir();
  });

  //testes do método cancelarConsulta
  test("verificar se o método cancelarConsulta retorna resultado válido", () => {
    const profissional = new Profissional();
    profissional.cadastrarProfissional(
      "ProTest",
      "01/04/1980",
      "2198989898",
      "Rio de Janeiro",
      "profissional",
      "sim",
      "psiquiatra",
      "psicanalista"
    );
    const paciente = new Paciente();
    paciente.cadastrarPaciente(
      "PacienteTest",
      "01/04/1980",
      "2187878787",
      "Rio de Janeiro",
      "paciente",
      "sim",
      "sim",
      "depressão",
      "sim"
    );
    profissional.cadastrarConsulta("segunda", "11:00", "PacienteTest");
    const cancelamento = profissional.cancelarConsulta("segunda", "11:00");

    expect(cancelamento).toBe("Consulta cancelada com sucesso.");
    expect(profissional.agenda[0].horario["11:00"]).toBe(undefined);
    expect(paciente.consultasMarcadas).toEqual([]);

    profissional.destruir();
    paciente.destruir();
  });

  test("verificar se o método cancelarConsulta retorna erro ao verificar horário da consulta sem nome de paciente", () => {
    const profissional = new Profissional();
    profissional.cadastrarProfissional(
      "ProTest",
      "01/04/1980",
      "2198989898",
      "Rio de Janeiro",
      "profissional",
      "sim",
      "psiquiatra",
      "psicanalista"
    );
    expect(() => profissional.cancelarConsulta("segunda", "11:00")).toThrow(
      "Não há nenhuma consulta marcada neste horário."
    );

    profissional.destruir();
  });
});
