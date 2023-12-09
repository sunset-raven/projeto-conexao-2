const Consultas = require("./Consultas");

describe("Testes da classe Consultas", () => {
  //testes de instância
  test("verificar se instância foi criada corretamente", () => {
    const consultas = new Consultas();
    expect(consultas instanceof Consultas).toBe(true);
  });

  //testes do método inserirConsulta
  test("verificar se o método inserirConsulta retorna válido", () => {
    const consultas = new Consultas();
    consultas.inserirConsulta("segunda", "10:00", "ProTest");

    expect(consultas.consultas).toEqual([
      { dia: "segunda", horario: "10:00", profissional: "ProTest" },
    ]);
  });

  //testes do método buscarIndexConsulta
  test("verificar se o método buscarIndexConsulta retorna válido", () => {
    const consultas = new Consultas();
    consultas.inserirConsulta("segunda", "10:00", "ProTest");
    const indexConsulta = consultas.buscarIndexConsulta(
      "segunda",
      "10:00",
      "ProTest"
    );

    expect(indexConsulta).toBe(0);
  });

  //testes do método removerConsulta
  test("verificar se o método removerConsulta retorna válido", () => {
    const consultas = new Consultas();
    consultas.inserirConsulta("segunda", "10:00", "ProTest");
    consultas.removerConsulta(0);

    expect(consultas.consultas).toEqual([]);
  });
});
