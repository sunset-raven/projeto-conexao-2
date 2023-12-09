const Agenda = require("./Agenda");

describe("Testes da classe Agenda", () => {
  //testes de instância
  test("verificar se instância foi criada corretamente", () => {
    const agenda = new Agenda();
    expect(agenda instanceof Agenda).toBe(true);
  });

  //testes do método buscarDia
  test("verificar se o método buscarDia retorna válido", () => {
    const agenda = new Agenda();
    const dia = agenda.buscarDia("segunda");

    expect(dia).toBe(0);
  });

  test("verificar se o método buscarDia retorna inválido caso receba valor diferente de dia", () => {
    const agenda = new Agenda();
    const dia = agenda.buscarDia("maçã");

    expect(dia).toBe(-1);
  });

  //testes do método buscarPaciente
  test("verificar se o método buscarPaciente retorna válido", () => {
    const agenda = new Agenda();
    const paciente = agenda.buscarPaciente(0, "11:00");

    expect(paciente).toBe(undefined);
  });

  //testes to método alterarHorario
  test("verificar se o método alterarHorario retorna válido", () => {
    const agenda = new Agenda();
    const mudanca = agenda.alterarHorario(0, "11:00", "PacienteTeste");
  
    expect(agenda.dias[0].horario["11:00"]).toBe("PacienteTeste");
  });
});
