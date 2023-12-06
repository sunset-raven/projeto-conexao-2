const Paciente = require("./Paciente");
const Profissional = require("../Profissional/Profissional");

describe("Testes da classe Pessoa", () => {
  //testes de instância
  test("verificar se instância foi criada corretamente", () => {
    const paciente = new Paciente();
    expect(paciente instanceof Paciente).toBe(true);
  });

  //testes do método cadastrarPaciente
  test("verificar se o método cadastrarPaciente retorna válido", () => {
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

    expect(paciente).toEqual({
      nome: "PacienteTest",
      cidade: "Rio de Janeiro",
      tipoDePessoa: "paciente",
      aceitaRemoto: "sim",
      consultasMarcadas: [],
    });

    paciente.destruir();
  });

  test("verificar se retorna erro ao informar tipo de pessoa diferente de paciente no método cadastrarPaciente", () => {
    const paciente = new Paciente();

    expect(() =>
      paciente.cadastrarPaciente(
        "PacienteTest",
        "01/04/1980",
        "2187878787",
        "Rio de Janeiro",
        "profissional",
        "sim",
        "sim",
        "depressão",
        "sim"
      )
    ).toThrow("Você não é um paciente!");
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
    profissional.cadastrarConsulta("segunda", "10:00", "PacienteTest");
    const cancelamento = paciente.cancelarConsulta(
      "segunda",
      "10:00",
      "ProTest"
    );

    expect(cancelamento).toBe("Consulta cancelada com sucesso.");
    expect(profissional.agenda[0].horario["10:00"]).toEqual(undefined);
    expect(paciente.consultasMarcadas).toEqual([]);

    profissional.destruir();
    paciente.destruir();
  });

  test("verificar se o método cancelarConsulta retorna erro ao buscar consulta inválida", () => {
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
    profissional.cadastrarConsulta("segunda", "10:00", "PacienteTest");

    expect(() =>
      paciente.cancelarConsulta("terça", "10:00", "ProTest")
    ).toThrow("Essa consulta não existe ou está marcada para outra pessoa.");

    profissional.destruir();
    paciente.destruir();
  });
});
