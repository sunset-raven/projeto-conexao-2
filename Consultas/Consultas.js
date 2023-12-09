class Consultas {
  consultas = [];

  inserirConsulta(dia, horario, nome) {
    const consultaMarcada = {
      dia: dia,
      horario: horario,
      profissional: nome,
    };
    this.consultas.push(consultaMarcada);
  }

  buscarIndexConsulta(dia, horario, nome) {
    const buscandoConsulta = this.consultas.findIndex(
      (diaBuscado) =>
        diaBuscado.dia === dia &&
        diaBuscado.horario === horario &&
        diaBuscado.profissional === nome
    );
    return buscandoConsulta;
  }

  removerConsulta(index) {
    this.consultas.splice(index, 1);
  }
}

module.exports = Consultas;