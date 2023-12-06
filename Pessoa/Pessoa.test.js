const Pessoa = require("./Pessoa");
const Paciente = require("../Paciente/Paciente");
const Profissional = require("../Profissional/Profissional");

describe("Testes da classe Pessoa", () => {
  //testes de instância
  test("verificar se instância foi criada corretamente", () => {
    const pessoa = new Pessoa();
    expect(pessoa instanceof Pessoa).toBe(true);
  });

  //testes do método cadastrarPessoa
  test("verificar se o método cadastrarPessoa retorna válido", () => {
    const pessoa = new Pessoa();
    pessoa.cadastrarPessoa(
      "Test",
      "01/04/1980",
      "2196969696",
      "Rio de Janeiro",
      "paciente",
      "sim"
    );
    expect(pessoa).toEqual({
      nome: "Test",
      cidade: "Rio de Janeiro",
      tipoDePessoa: "paciente",
      aceitaRemoto: "sim",
    });
  });

  test("verificar se o método cadastrarPessoa retorna erro ao inserir telefone inválido", () => {
    const pessoa = new Pessoa();

    expect(() =>
      pessoa.cadastrarPessoa(
        "Test",
        "01/04/1980",
        "21111",
        "Rio de Janeiro",
        "paciente",
        "sim"
      )
    ).toThrow("Telefone não reconhecido!");
  });

  test("verificar se o método cadastrarPessoa retorna erro ao inserir nome inválido", () => {
    const pessoa = new Pessoa();

    expect(() =>
      pessoa.cadastrarPessoa(
        1000,
        "01/04/1980",
        "2196969696",
        "Rio de Janeiro",
        "paciente",
        "sim"
      )
    ).toThrow("O nome deve ter apenas letras!");
  });

  //testes do método buscarPessoa
  test("verificar se o método buscarPessoa retorna uma pessoa profissional por nome", () => {
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
    const busca = paciente.buscarPessoa("profissional", "nome", "ProTest");

    expect(busca).toEqual({
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
    paciente.destruir();
  });

  test("verificar se o método buscarPessoa retorna pessoas profissionais por cidade", () => {
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
    const busca = paciente.buscarPessoa(
      "profissional",
      "cidade",
      "Rio de Janeiro"
    );

    expect(busca).toEqual([
      {
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
      },
    ]);

    profissional.destruir();
    paciente.destruir();
  });

  test("verificar se o método buscarPessoa retorna erro ao buscar profissional por nome sem profissional cadastrado nesse nome", () => {
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

    expect(() =>
      paciente.buscarPessoa("profissional", "nome", "Nobody")
    ).toThrow("Esse nome não consta na lista!");

    profissional.destruir();
    paciente.destruir();
  });

  test("verificar se o método buscarPessoa retorna erro ao buscar profissional por cidade sem profissional cadastrado nessa cidade", () => {
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

    expect(() =>
      paciente.buscarPessoa("profissional", "cidade", "Espírito Santo")
    ).toThrow("Nenhum profissional encontrado.");

    profissional.destruir();
    paciente.destruir();
  });

  test("verificar se o método buscarPessoa retorna uma pessoa paciente por nome", () => {
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
    const profissional = new Profissional();
    const busca = profissional.buscarPessoa("paciente", "nome", "PacienteTest");

    expect(busca).toEqual({
      nome: "PacienteTest",
      cidade: "Rio de Janeiro",
      tipoDePessoa: "paciente",
      aceitaRemoto: "sim",
      consultasMarcadas: [],
    });

    profissional.destruir();
    paciente.destruir();
  });

  test("verificar se o método buscarPessoa retorna pessoas pacientes por cidade", () => {
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
    const profissional = new Profissional();
    const busca = profissional.buscarPessoa(
      "paciente",
      "cidade",
      "Rio de Janeiro"
    );

    expect(busca).toEqual([
      {
        nome: "PacienteTest",
        cidade: "Rio de Janeiro",
        tipoDePessoa: "paciente",
        aceitaRemoto: "sim",
        consultasMarcadas: [],
      },
    ]);

    profissional.destruir();
    paciente.destruir();
  });

  test("verificar se o método buscarPessoa retorna erro ao buscar paciente por nome sem paciente cadastrado nesse nome", () => {
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
    const profissional = new Profissional();

    expect(() =>
      profissional.buscarPessoa("paciente", "nome", "Nobody")
    ).toThrow("Esse nome não consta na lista!");

    profissional.destruir();
    paciente.destruir();
  });

  test("verificar se o método buscarPessoa retorna erro ao buscar paciente por cidade sem paciente cadastrado nessa cidade", () => {
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
    const profissional = new Profissional();

    expect(() =>
      paciente.buscarPessoa("paciente", "cidade", "Espírito Santo")
    ).toThrow("Nenhum paciente encontrado.");

    profissional.destruir();
    paciente.destruir();
  });
});

// const profissional = new Profissional();
// profissional.cadastrarProfissional(
//   "ProTest",
//   "01/04/1980",
//   "2198989898",
//   "Rio de Janeiro",
//   "profissional",
//   "sim",
//   "psiquiatra",
//   "psicanalista"
// );
// const paciente = new Paciente();
// paciente.cadastrarPaciente(
//   "PacienteTest",
//   "01/04/1980",
//   "2187878787",
//   "Rio de Janeiro",
//   "paciente",
//   "sim",
//   "sim",
//   "depressão",
//   "sim"
// );
